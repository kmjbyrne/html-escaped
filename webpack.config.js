const path = require('path');

module.exports = function init() {
    let config = {};
    config.entry = {
        app: ['./src/index.js']
    };
    config.output = {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    };
    config.resolve = {
        extensions: ['.js']
    };
    config.devtool = 'inline-source-map';
    config.devServer = {
        inline: true,
        contentBase: './dist'
    };
    config.watch = true;
    config.module = {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.join(__dirname, 'src'),
                path.join(__dirname, 'test')
            ],
            exclude: path.resolve(__dirname, 'node_modules'),
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    };
    return config;
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
