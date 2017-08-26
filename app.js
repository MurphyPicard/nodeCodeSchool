var hello = require('./custom_hello');
var gb = require('./custom_goodbye');
var myMod = require('./my_module');

hello();
gb.goodbye();
myMod.foo(5, 3);
myMod.bar(5, 3);

var makeRequest = require('./make_request');
makeRequest("Hello Ed");
makeRequest('Hello Will');
