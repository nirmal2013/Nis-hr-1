var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');

var mainPath = path.resolve(__dirname, '..', 'src', 'main.js');
var srcPath = path.resolve(__dirname, '..', 'src');

module.exports = function() {
  var bundleStartTime = null;
  var initialBuild = true;

  /*
    fire up webpack and pass in the webpack.config.js
   */
  var compiler = webpack(webpackConfig);

  /*
    compiler callback during compilation
   */
  compiler.plugin('compile', function() {
    bundleStartTime = Date.now();
  });

  /*
    compiler callback once bundling is done
   */
  compiler.plugin('done', function() {
    if(initialBuild) {
      console.log(chalk.green('Bundled successfully in ' + (Date.now() - bundleStartTime) + 'ms!'));
    } else {
      console.log(chalk.green('Re-Bundled in ' + (Date.now() - bundleStartTime) + 'ms!'));
    }
    console.log();
    console.log(chalk.cyan('Watchifying, ') + chalk.cyan(srcPath));
    initialBuild = false;
  });

  compiler.plugin("compilation", function(compilation, params) {
    if (!initialBuild) {
      bundleStartTime = Date.now();
      console.log(chalk.yellow("Starting a new compilation."));
    }

    compilation.plugin("optimize", function() {
      console.log(chalk.yellow("Optimizing files..."));
    });
  });

  var bundlerOptions = {
    // inform webpack to serve from build path. When proxying:
    // http://localhost:3100/build -> http://localhost:8080/build
    publicPath: '/build/',

    // for Hot Replacement
    hot: true,

    // terminal configs
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    },
    devServer: {
      historyApiFallback: true
    }
  };

  /*
    fireup webpack-dev-server and pass in the compiler
   */
  var bundler = new webpackDevServer(compiler, bundlerOptions);

  bundler.listen(8080, 'localhost', function() {
    console.log();
    console.log(chalk.yellow('Building project... Hold On!'));
  });
};
