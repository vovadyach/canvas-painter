var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './js/main.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {   test: /\.js$/, loader: 'babel', exclude: /node-modules/ },
            {   test: /\.scss$/, loader: 'style!css!scss', exclude: /node-modules/ }
        ]
    }
};