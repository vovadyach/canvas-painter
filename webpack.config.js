var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 1111
    },
    module: {
        loaders: [
            {   test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
