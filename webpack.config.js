/* globals __dirname, process */
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './index.jsx',
    output: {
        path: __dirname,
        //publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'source-map'
        }],
        loaders: [{
            test: /\.s?css$/,
            include: /\./,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'url?limit=8192',
                'img'
            ]
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: [
                'react-hot',
                'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
            ]
        }]
    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:3000');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}