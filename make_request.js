var http = require('http');

var makeRequest = (message)=>{

  var options = {
    host: 'localhost', port: 8080, path: '/', method: 'POST'
  };
  var request = http.request(options, (response)=>{
    response.on('data', (data)=>{
      console.log('kaighan');
      console.log(data);//buffer
    });
  });//request
  console.log(message);
  request.write(message);
  request.end();
}//makeRequest

module.exports = makeRequest;
// 'C:\\Users\\ADMIN\\Desktop\\nonProjects\\nodeCodeSchool\\'
