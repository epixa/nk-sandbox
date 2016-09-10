module.exports = {
  context: `${__dirname}/public`,
  entry: {
    javascript: './index.js',
    html: './index.html',
    css: './styles.css',
    favicon: './favicon.ico',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(css|html|ico)$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
};
