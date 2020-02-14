const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  mode: `${process.env.NODE_ENV}`,
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HWP(
      {template: path.join(__dirname, 'public', 'index.html')}
    )
  ]
}