var express = require('express');
var app = express();
var path = require("path");
var port = 8082;

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(port, function () {
  console.log('running on port ' + port);
});
