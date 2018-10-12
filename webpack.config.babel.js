import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default {
    entry: {
        main: path.join(__dirname, '/src/main.js')
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
    plugins: [
        new Dotenv(),
        new CopyWebpackPlugin([
            {from : 'dist', to: '../public/js', force: true}
        ])
    ],
    node: {
        fs: 'empty'
    },
    devtool: 'source-map'
};