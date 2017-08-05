var child_process = require('child_process');

if (process.env.NODE_ENV === 'production') {
  var child = child_process.exec("brunch build --production", function (error) {
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
