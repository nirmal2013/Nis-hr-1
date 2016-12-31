var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var chalk = require('chalk');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.port : 3100;

var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if(!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();

  // redirect all requests from localhost:3100/build to webpack-dev-server
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

/*
  catch all the errors thrown while proxying
 */
proxy.on('error', function() {
  console.log(chalk.red('Error in Proxy server. Please try again.'));
});

app.listen(port, function() {
  console.log(chalk.yellow('------------------------------------------------------------'));
  console.log(chalk.yellow('|                                                          |'));
  console.log(chalk.yellow('|     ') + chalk.gray('Node server base setup on port: ' + port + ' and serving.') + chalk.yellow('    |'));
  console.log(chalk.yellow('|                                                          |'));
  console.log(chalk.yellow('------------------------------------------------------------'));
});
