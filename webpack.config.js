var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/app.jsx',
  // entry: './src/app1.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
