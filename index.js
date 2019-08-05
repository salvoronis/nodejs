var http = require('http');

var server = http.createServer(function(req, res){
  console.log("URL: "+req.url);
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var stream = fs.createReadStream(__dirname + '/index.html');
  stream.on('data', function(chun){
    //console.log(chun+'');
    res.end(chun+'');
  });
  //res.end('lol');
});

server.listen(1488, '127.0.0.1');
console.log("gooddo");

var fs = require('fs');

var stream = fs.createReadStream(__dirname + '/text.txt');
stream.on('data', function(chun){
  console.log(chun+'');
});
