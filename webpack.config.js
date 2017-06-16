var path = require('path');

module.exports = {
    entry: "./www/app/main",
    // output: { filename: "./www/dist/bundle.js"},
    output: {
        path: __dirname +  '/www/',
        filename: 'dist/bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /ts$/,
                loader: "ts-loader"
            },
            {
                test: /html$/,
                loader: "html-loader"
            },
            {
                test: /css$/,
                loader: "css-loader"
            }                        
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/www/'),
        // hot: true
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    resolve: {
        extensions: [".ts", ".js", ".html", ".css"]
    },
    devtool: "#inline-source-map"
}