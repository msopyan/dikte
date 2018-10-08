import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
    entry: {
        static: path.join(__dirname, './static.js'),
        main: path.join(__dirname, './src/main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        },{
            test: /\.css/,
            loader: [
                'style-loader',
                'css-loader'
            ]
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};