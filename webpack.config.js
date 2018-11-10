const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = [{
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    'index': [
      path.resolve(__dirname, 'assets/javascripts/application.js')
    ]
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'application_bundle.js'
  }
},{
  mode: 'development',
  output: {
    path: __dirname + '/public/stylesheets',
    filename: 'application_bundle.css'
  },
  entry: './assets/stylesheets/application.scss',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=vender/img/bg/[name].[ext]'
      }
    ]
  },
  plugins: [new ExtractTextPlugin( "application_bundle.css" )]
}]