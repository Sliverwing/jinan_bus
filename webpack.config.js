var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './resources/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                loader: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}