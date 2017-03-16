import path from 'path';
import webpack from 'webpack';
import htmlWebpackPluging from 'html-webpack-plugin';
import webpackMd5Hash from 'webpack-md5-hash';
import extractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'app/js/vendor.js'),
    main: path.resolve(__dirname, 'app/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: ''
  },
  plugins: [
    //Generate an external css file with a hash in the file name
    new extractTextPlugin('css/[name].[contenthash].css'),

    //Hash the files using MD5 so that their names change when the content changes
    new webpackMd5Hash(),

    //Use CommonsChunkPlugin to create a separate bundle of vendor libraries so that they are cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

    // Create html file that includes reference to bundle JS.
    new htmlWebpackPluging({
      template: path.resolve(__dirname, 'app/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSplash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
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
        use: 'babel-loader'
      },
      {
        test: /.css?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
};
