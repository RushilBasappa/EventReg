var express = require('express');
var path = require('path');
var serveIndex = require('serve-index');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

// Define the port to run on
app.set('port', 3000);

app.use('/', serveIndex(rootPath + '/app', {
  icons: true,
  hidden: true
}));
app.use('/', express.static(rootPath + 'app'));

app.listen(app.get('port'), function() {
  console.log('Listening to port ' + app.get('port'));
});
