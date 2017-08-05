var express = require('express');
var path = require('path');
var chalk = require('chalk');
var moment = require('moment-timezone');
var moment = require('moment-timezone');


var proxy = httpProxy.createProxyServer();

if (process.env.NODE_ENV === 'production') {

  var jsonKeyPath = Path.join(__dirname, 'nischinth-portal-firebase-adminsdk-dq464-1a4da029c8.json');
  admin.initializeApp({
    credential: admin.credential.cert(jsonKeyPath),
    databaseURL: "https://nishr-47a55.firebaseio.com/"
  });

    var app = express();
    var port = process.env.PORT;

    var publicPath = Path.join(__dirname, 'public');

      app.use(express.static(publicPath));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({
        extended: true
      }));

      app.get('/getTime', function (req, res) {
        var timeStamp = moment().tz("Asia/Kolkata").format("dddd, MMMM Do YYYY, h:mm:ss a");
        res.send({timeStamp: timeStamp});
      });

      app.get('/getDate', function (req, res) {
        var dateStamp = moment().tz("Asia/Kolkata").format("dddd, MMMM Do YYYY");
        res.send({dateStamp: dateStamp});
      });

      app.get('/', function (req, res) {
        res.redirect('/index.html');
      });

      app.post('/user', function (req, res) {
        // req, url = /users, type=post, body = name=foo&color=red or body = {"name": "foo", "color": "red"}
        var uid = req.body.uid;
        admin.auth().getUser(uid)
          .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          res.send(userRecord.toJSON());
        })
        .catch(function(error) {
          res.send({error: error});
        });
      });

      app.get('/user', function (req, res) {
        // req, url = /users?uid="dafa"
        var uid = req.param('uid');
        admin.auth().getUser(uid)
          .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          res.send(userRecord.toJSON());
        })
        .catch(function(error) {
          res.send({error: error});
        });
      });

app.listen(port, function() {
  console.log(chalk.yellow('------------------------------------------------------------'));
  console.log(chalk.yellow('|                                                          |'));
  console.log(chalk.yellow('|     ') + chalk.gray('Node server base setup on port: ' + port + ' and serving.') + chalk.yellow('    |'));
  console.log(chalk.yellow('|                                                          |'));
  console.log(chalk.yellow('------------------------------------------------------------'));
});
} else {
  var child = child_process.exec("brunch watch --server", function (error) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

  child.stdout.on('data', function(data) {
    console.log(data.toString());
  });

  child.stderr.on('data', function(data) {
    console.log(data.toString());
  });
}
