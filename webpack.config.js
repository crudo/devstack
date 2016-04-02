var path = require('path');
var webpack = require('webpack');

module.exports = function getWebpackConfig() {
    var babelOptions = JSON.stringify({
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime']
    });

    return {
        entry: {
            app: ['./app/app']
        },

        output: {},

        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel?' + babelOptions,
                    exclude: /node_modules/
                },

                {
                    test: /\.scss$/,
                    loader: 'style!css?sourceMap!autoprefixer!sass'
                },

                {
                    test: /\.css$/,
                    loader: 'style!css?sourceMap!autoprefixer'
                },

                // https://msdn.microsoft.com/en-us/library/cc848897(v=vs.85).aspx
                {
                    test: /\.(png|svg)$/,
                    loader: 'url-loader?limit=32768&mimetype=image/png'
                },

                {
                    test: /\.(eot|woff|ttf|svg)/,
                    loader: 'file-loader'
                }
            ]
        },

        resolve: {
            // Allow to omit extensions when requiring these files
            extensions: ['', '.js', '.jsx', '.scss'],
            modulesDirectories: ['node_modules', 'bower_components'],

            alias: {
                react: path.join(__dirname, 'node_modules/react/')
            }
        },

        plugins: []
    };
};
