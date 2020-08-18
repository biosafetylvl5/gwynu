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
cleanFlag = args.includes("--clean")
mainLog("Clean set to "+chalk.bold(cleanFlag))

//import packages
var   Metalsmith = require('metalsmith'),
      mif        = require('metalsmith-if'),
      inplace    = require('metalsmith-in-place'),
      layouts    = require('metalsmith-layouts'),
      excelmd    = require('metalsmith-excel-markdown'),
      copy       = require('metalsmith-copy'),
      transform  = require('metalsmith-transform'),
      emoji      = require('metalsmith-emoji'),
      ignore      = require('metalsmith-ignore'),
      publish    = require('metalsmith-publish'),
      mdfootnote = require('markdown-it-footnote')

var   watch      = mode==dev ? require('metalsmith-watch') : () => undefined,
      serve      = mode==dev ? require('metalsmith-serve') : () => undefined,
      livereload = mode==dev ? require('metalsmith-livereload') : () => undefined,
      msDebug    = mode==dev ? require('metalsmith-debug') : () => undefined,
      minifyHtml = mode==prod ? require('metalsmith-html-minifier') : () => undefined

//    inspect    = require('metalsmith-inspect');
//    replace    = require('metalsmith-regex-replace')


var hljs = require('highlight.js')

var implicitFigures = require('markdown-it-implicit-figures');


function render_footnote_caption(tokens, idx) {
	  var n = Number(tokens[idx].meta.id + 1).toString();

	  if (tokens[idx].meta.subId > 0) {
		      n += ':' + tokens[idx].meta.subId;
		    }
	  console.log(n)
	  return '!' + n + '!';
}




Metalsmith(__dirname)
    .clean(cleanFlag)
    .destination('./build')
    .use(ignore(["*.backup"]))
    .use(excelmd())
    .use(publish({
	    draft: mode==dev,
	    private: mode==dev,
	    unlisted: mode==dev,
	    public: true
    }))
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
            plugins: ["markdown-it-footnote",
		      ["markdown-it-toc-done-right", {"level": 2}], 
		      "markdown-it-include", 
		      "markdown-it-anchor", 
		      "markdown-it-plantuml", 
		      "markdown-it-sup", 
		      [implicitFigures, {figcaption: true}]
	    ],
	    highlight:function (str, lang) {
		        if (lang && hljs.getLanguage(lang)) {
				      try {
				              return hljs.highlight(lang, str).value;
				            } catch (__) {}
				    }
		        return ''; // use external default escaping
		      }
        }
    }))
    .use(layouts())
    .use(emoji())
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
