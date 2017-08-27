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

var express = require('express');
var app = express();

var request = require('request')
var url = require('url')

app.get('/tweets/:username', (req, res)=>{
  var username = req.params.username;
  options = {
    protocol: "http:",
    host: 'api.twitter.com',
    pathname: '/1/statuses/user_timeline.json',
    query: { screen_name: username, count: 10}
  }
  var twitterUrl = url.format(options);
  request(twitterUrl).pipe(res);
});
