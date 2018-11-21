const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        bundle: ['./assets/js/src/ready.js', './assets/css/src/application.scss'],
    },
    output: {
        filename: 'assets/js/application.js'
    },
    devtool: isDevelopment && 'source-map',
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.join(__dirname, 'assets'),
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: [{
                  loader: 'handlebars-loader',
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                            minimize: !isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: [
                    /(node_modules|application)/,
                    path.join(__dirname, 'assets/css'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                            minimize: !isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ] 
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/application.css',
        }),  
        new HtmlWebpackPlugin({
            title: 'Prueba de alberto ferrero',
            description: 'Maquetación para The Cocktail Noviembre 2018',
            template: 'index.html',
            minify: !isDevelopment && {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            },

        })
    ]
};