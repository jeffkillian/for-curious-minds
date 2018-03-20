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
                test: /\.jsx?$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/
             }
         ],
         

     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };