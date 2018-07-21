const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    WEBPACK_MODE = process.env.npm_lifecycle_event
    ;

const config = {
    entry: {
            app: path.resolve(__dirname, 'src', 'js', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    devtool: (WEBPACK_MODE === 'build') ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules=true&url=false&localIdentName: \'[local]--[hash:base64:5]\'', 
                    'postcss-loader', {
                        loader: 'less-loader',
                        options: {
                            data: "$env: " + WEBPACK_MODE + ";"
                        }
                    }]
                })
            },
            {
                test: /\.js[x]?$/,
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
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: ['app']
        }),
        new ExtractTextPlugin('main.css'),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src', 'images'),
            to: path.resolve(__dirname, 'public', 'images')
        }])
    ]
};

if (WEBPACK_MODE === 'build') {
    config.plugins = [...config.plugins, new UglifyJsPlugin()]
}

module.exports = config;