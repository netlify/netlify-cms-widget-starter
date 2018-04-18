const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './development/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /cms/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devtool: 'eval-source-map',
  serve: {
    open: {
      path: '/#/collections/test/entries/test',
    },
    logLevel: 'error',
  },
}
