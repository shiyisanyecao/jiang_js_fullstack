const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        loader: 'url-loader',
                        options: {
                            name: 'static/images/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: 'static/css[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./public/index.html')
        })
    ],
    devServer: {
        port: 3000,
        open: true
    },
    devtool: 'inline-source-map'
}