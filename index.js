var Metalsmith = require('metalsmith'),
    inplace    = require('metalsmith-in-place');
    layouts    = require('metalsmith-layouts');
    watch      = require('metalsmith-watch');
    serve      = require('metalsmith-serve');
    livereload = require('metalsmith-livereload');
    excelmd    = require('metalsmith-excel-markdown');
    debug      = require('metalsmith-debug');
    copy       = require('metalsmith-copy');
    inspect    = require('metalsmith-inspect');
    replace    = require('metalsmith-regex-replace');

require('jstransformer-markdown-it')
require('markdown-it-footnote')
require('markdown-it-toc-done-right')
require('nunjucks')
require('jstransformer-nunjucks')

Metalsmith(__dirname)
    .clean(true)
    .destination('./build')
    .use(copy({
        pattern: '*/*.njk.md',
        transform: function (filename) {
            filename = filename.replace(".njk.md", ".markdown-it.njk")
            console.log("Renaming file to "+filename)
            return filename
        }
    }))
    .use(excelmd())
    .use(inplace({
        "engineOptions": {
            html: true,
            linkify: true,
            typographer: true,
            plugins: ["markdown-it-footnote", "markdown-it-toc-done-right"],
        }
    }))
    .use(layouts())
    .use(serve({
        verbose: true,
    }))

    .use(
        watch({
            paths: {
                "src/**/*": "**/*",
                "layouts/**/*": "**/*",
            },
            livereload: false,
        })
    )
    .use(livereload({
        debug: false,
        delay: 0,
        port: 4000,
        script: "<script src='http://localhost:35729/livereload.js'></script>"
    })
    )
    .build(function (err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Build Complete!!");
        }
    }
    )
