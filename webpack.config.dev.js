import path from 'path';
import htmlWebpackPluging from 'html-webpack-plugin';

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'app/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'js/bundle.js',
    publicPath: ''
  },
  plugins: [
    new htmlWebpackPluging({
      template: path.resolve(__dirname, 'app/index.html'),
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader'
      },
      {
        test: /.css?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};
