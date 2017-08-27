// var hello = require('./custom_hello');
// var gb = require('./custom_goodbye');
// var myMod = require('./my_module');
//
// hello();
// gb.goodbye();
// myMod.foo(5, 3);
// myMod.bar(5, 3);
//
// // var makeRequest = require('C:/Users/ADMIN/Desktop/nonProjects/nodeCodeSchool/make_request');
// var makeRequest = require('./make_request'); // easier
// //npm search request
// makeRequest("Hello Ed");
// makeRequest('Hello Will');
// makeRequest('hi');

// var express = require('express');
// var app = express();
//
// var request = require('request')
// var url = require('url')
//
// app.get('/tweets/:username', (req, res)=>{
//   var username = req.params.username;
//   options = {
//     protocol: "http:",
//     host: 'api.twitter.com',
//     pathname: '/1/statuses/user_timeline.json',
//     query: { screen_name: username, count: 10}
//   }
//   var twitterUrl = url.format(options);
//   request(twitterUrl).pipe(res);
// });



//code from codeSchool exercises
// var url = require('url');
//
// options = {
//   protocol: "http:",
//   host: "search.twitter.com",
//   pathname: "/search.json",
//   query: {q: "codeschool"}
// };
// var searchURL = url.format(options);
// console.log(searchURL);

// var request = require('request');
// request(searchURL, function(err, res, bod){
//   console.log(bod);
// });
// var app = express();
// app.get('/', function(req, res){
//   request(searchURL).pipe(res);
// });
//
// app.listen(8080);

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client){
  console.log('Client connected...');
  client.emit('mess', {hello: 'world'});
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
server.listen(8080, function(){
  console.log('Ara listening on 8080');
});
