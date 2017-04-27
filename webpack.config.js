var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './resources/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'app.js'
    }
}