const chalk = require("chalk")

const statusSymbolMap = {"success": chalk.green("✔️ "), "failure": chalk.red("✖ "), undefined: "", "operation": chalk.magenta("✏️ ")}
const getPrinter = (process) => (message, stat) => console.log(chalk.dim("["+process+"] ")+statusSymbolMap[stat]+message)
const mainLog = getPrinter("gwynu-main")

// set mode
args = process.argv.slice(2)
const dev = "dev", debug = "debug", prod = "production"
const validModes = [dev, debug, prod]
const mode = args[args.length-1]
if (!validModes.includes(mode)) {
	mainLog("Please specify a valid mode", "failure")
	process.exit(1)
}
mainLog("Mode set to "+chalk.bgGreen(mode))

//get options

//set clean (default: true)
cleanFlag = !args.includes("--no-clean")
mainLog("Clean set to "+chalk.bold(cleanFlag))

//import packages
var   Metalsmith = require('metalsmith'),
      mif        = require('metalsmith-if'),
      inplace    = require('metalsmith-in-place'),
      layouts    = require('metalsmith-layouts'),
      excelmd    = require('metalsmith-excel-markdown'),
      copy       = require('metalsmith-copy'),
      transform  = require('metalsmith-transform')
var   watch      = mode==dev ? require('metalsmith-watch') : () => undefined,
      serve      = mode==dev ? require('metalsmith-serve') : () => undefined,
      livereload = mode==dev ? require('metalsmith-livereload') : () => undefined,
      msDebug    = mode==dev ? require('metalsmith-debug') : () => undefined,
      minifyHtml = mode==prod ? require('metalsmith-html-minifier') : () => undefined

//    inspect    = require('metalsmith-inspect');
//    replace    = require('metalsmith-regex-replace')

/*require('jstransformer-markdown-it')
require('markdown-it-footnote')
require('markdown-it-toc-done-right')
require('nunjucks')
require('jstransformer-nunjucks')*/

Metalsmith(__dirname)
    .clean(cleanFlag)
    .destination('./build')
    .use(excelmd())
    .use(copy({
        pattern: '*/*.njk.md',
        transform: function (filename) {
            filename = filename.replace(".njk.md", ".markdown-it.njk")
	    const copyLog = getPrinter("gwynu-copy")
            copyLog("Renaming file to "+filename, "operation")
            return filename
        }
    }))
    .use(inplace({
        "engineOptions": {
            html: true,
            linkify: true,
            typographer: true,
            plugins: ["markdown-it-footnote", "markdown-it-toc-done-right"],
        }
    }))
    .use(layouts())
    .use(mif(mode==prod,
	    minifyHtml()
    ))
    .use(mif(mode==dev,
            serve({
                verbose: true,
	    }
    )))
    .use(mif(mode==dev,
        watch({
            paths: {
                "src/**/*": "**/*",
                "layouts/**/*": "**/*",
            },
            livereload: false,
        })
    ))
   .use(mif(mode==dev,
	    livereload({
                debug: false,
                delay: 0,
                port: 4000,
                script: "<script src='http://localhost:35729/livereload.js'></script>"
            })
    ))
    .build(function (err) {
        if(err) {
            mainLog(err, "failure");
        }
        else {
            mainLog("Build Complete!!", "success");
        }
    }
)
