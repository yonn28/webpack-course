const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        'hello-world':'./src/hello-world.js',
        'dog': './src/dog.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'development',
    devServer:{
        static:{
            directory: path.resolve(__dirname, './dist'),
        }, 
        port: 9000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader' ,'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader' ,'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:[ '@babel/env' ],
                        plugins: [ 'transform-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello world',
            template: 'src/index.hbs',
            description: 'some hello world description'
        }),
        new HtmlWebpackPlugin({
            filename: 'dog.html',
            chunks:['dog'],
            title: 'dog',
            template: 'src/dog.hbs',
            description: 'some dog description'
        })
    ]
}