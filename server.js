var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.send('Hello World!'); // This will serve your request to '/'.
  res.sendFile(__dirname + '/index.html'); //dirname is current directory
});

app.listen(8080, function () {
  console.log('Ara, server.js is listening on port 8080, 8 0 8 0');
 });
