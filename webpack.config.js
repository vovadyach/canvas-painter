var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './js/main.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },

    // plugins: [
    //     new webpack.DefinePlugin({
    //         ON_TEST: process.env.NODE_ENV === 'test'
    //     })
    // ],

    module: {
        loaders: [
            {   test: /\.js$/, loader: 'babel', exclude: /node-modules/ },
            {   test: /\.sass$/, loader: 'style!css!sass', exclude: /node-modules/ }
        ]
    }
};

// if (process.env.NODE_ENV === 'production') {
//     config.output.path = __dirname + '/dist';
//     config.plugins.push(new webpack.optimize.UglifyJsPlugin());
//     config.devtool = 'source-map';
//
// }

//module.exports =  config;