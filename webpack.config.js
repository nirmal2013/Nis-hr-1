/*
Configuration information for the webpack bundler.
server/bundle.js  uses this config and builds the output
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
var BUILD_DIR = path.resolve(__dirname, 'public', 'build');
var APP_DIR = path.resolve(__dirname, 'src', 'main.js');

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',

  entry: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', APP_DIR],

  output: {
    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    // Meaning, In Dev env, no bundle.js is created under public folder
    path: BUILD_DIR,
    filename: 'bundle.js',
    // Everything related to Webpack should go through a build path,
    // localhost:3100/build. That makes proxying easier to handle
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel',
        exclude: [NODE_MODULES_DIR]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  // We have to manually add the Hot Replacement plugin when running from Node
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })]
};

module.exports = config;
