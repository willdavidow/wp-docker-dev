const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, './wp/wp-content/themes/%%%PACKAGE_NAME%%%'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new BrowserSyncPlugin({
            notify: false,
            host: 'localhost',
            port: 3001, // this is the port you develop on. Can be anything
            logLevel: 'silent',
            files: [
                './wp/wp-content/themes/%%%PACKAGE_NAME%%%/**/*.php',
                './wp/wp-content/themes/%%%PACKAGE_NAME%%%/**/*.js',
                './wp/wp-content/themes/%%%PACKAGE_NAME%%%/**/*.css',
            ],
            proxy: 'http://localhost:3000/', // This port must match docker-compose.yml
          }),
    ]
};