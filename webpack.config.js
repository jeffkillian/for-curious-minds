var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './www/js/app.jsx',
     output: {
         path: path.resolve(__dirname, 'www/build/'),
         filename: 'app.bundle.js'
     },
     resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      devtool: 'source-map',
 };