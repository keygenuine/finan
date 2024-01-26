
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports =  {
    mode:'development',
    entry:'./src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
             'style-loader',
             'css-loader',
            //   MiniCssExtractPlugin.loader,
            ]
        }]
    },
    // devServer: {
    //     static: {
    //         directory: "./public/index.js"
    //     },
    //     port: 10001
    // },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "estilo.css"
        // }),
        new NodePolyfillPlugin()
    ],
    resolve: {
  
        fallback: { 
        async_hooks: false,
        "fs": false,
    //     "tls": false,
        "net": false,
    //     "path": false,
    //     "zlib": false,
    //     "http": false,
    //     "https": false,
    //     "stream": false,
    //     "crypto": false,
        },
      }
    //   performance: {
    //     hints: false,
    //     maxEntrypointSize: 512000,
    //     maxAssetSize: 512000
    // }
}