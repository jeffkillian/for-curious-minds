var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './www/js/app.js',
     output: {
         path: path.resolve(__dirname, 'www/build/'),
         filename: 'app.bundle.js'
     },
     resolve: {
        extensions: ['.js', '.jsx']
      },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ],
         

     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };