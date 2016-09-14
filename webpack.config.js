/* eslint-env node */

module.exports = {
    entry: './app/assets/src/js/main.jsx',
    output: {
        path: './app/assets/javascripts',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        hot: true
    }
};
