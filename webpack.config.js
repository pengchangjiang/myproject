var HtmlWebpckPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: './index.js',
    output: {
        filename: 'app.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpckPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    }
}