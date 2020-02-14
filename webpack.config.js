const path = require('path');

module.exports = {
  mode: `${process.env.NODE_ENV}`,
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  }
}