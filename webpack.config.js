module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
}
