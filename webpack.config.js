const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    WEBPACK_MODE = process.env.npm_lifecycle_event
    ;

const config = {
    entry: path.resolve(__dirname, 'src', 'js', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8888
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new ExtractTextPlugin('main.css')
    ]
};

if (WEBPACK_MODE === 'build') {
    config.plugins = [...config.plugins, new UglifyJsPlugin()]
}

module.exports = config;