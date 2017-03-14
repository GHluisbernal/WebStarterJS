import path from 'path';

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'app/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/js'
  },
  plugins: [],
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
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
};
