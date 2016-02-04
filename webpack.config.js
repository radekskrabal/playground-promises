var path = require('path');

module.exports = {
    output: {
        libraryTarget: 'amd',
        path: './dist',
        filename: '[name].js',
        sourcePrefix: '    '
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            {test: /\x?$/, loader: 'ts-loader'}
        ]
    },

    entry: {
        'index': './src/index.ts'
    }
};