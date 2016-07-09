var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './js/main.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {   test: path.join(__dirname, 'es6'),
                loader: 'babel-loader'
            }e
        ]
    }
};
