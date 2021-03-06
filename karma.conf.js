// Karma configuration
// Generated on Thu Jun 27 2019 11:48:28 GMT+0100 (Irish Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: ['test/**/*.spec.js'],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'test/**/*.spec.js': ['webpack']
        },

        webpack: {
            module: {
                rules: [{
                    test: /\.js?/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]

            },
            watch: true,
        },

        webpackServer: {
            noInfo: true
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
