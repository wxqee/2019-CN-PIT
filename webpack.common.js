const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.jsx',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        contentBase: './docs',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin({
            title: '2019年个人所得税计算器',
            template: './index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
