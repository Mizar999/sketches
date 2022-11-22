const path = require('path');

module.exports = {
    entry: {
        basic1: ['./src/basic1/app.ts'],
        color1: ['./src/color1/app.ts'],
        color2: ['./src/color2/app.ts'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};