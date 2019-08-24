const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= {
    mode: 'development',
    entry: './src/client/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true
                    }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            context: ['/api/**'],
            target: 'http://localhost:3100',
            secure: true
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};