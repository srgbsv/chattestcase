require('es6-promise').polyfill();
var webpack = require("webpack");
var	path	=	require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: "./resources/assets/js/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './public/js/common/'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,  // Match both .js and .jsx
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.resolve('node_modules'),
                use: [
                    { loader: "style-loader" },
                    { loader: 'css-loader', options: { sourceMap: true } }
                ]
            },
            { test: /\.png$/,
              loader: 'url-loader',
              options: {
                  limit: 8192
              }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    }
};

