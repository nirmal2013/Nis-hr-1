var webpack = require("webpack");
var express = require('express');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/index.js'],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }

};

var app = express();
var compiler = webpack(config, function(err, stats) {
  console.log('hhhhg', err);
});
// compiler.run(function(err, stats) {
//     console.log('hhhhg');
// });
