/* eslint-env node */

module.exports = {
    entry: './app/assets/src/js/main.jsx',
    output: {
        path: './app/assets/javascripts',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        inline: true
    }
};
