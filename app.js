var fs = require('fs');
var express = require('express');
var app = express();

app.disable('x-powered-by');

var esea_push = fs.readFileSync(__dirname + '/lib/esea_push.cfg');
var whitelist = fs.readFileSync(__dirname + '/lib/whitelist.txt');

app.get('/serverconfigs/esea/6v6/push', function(req, res){
  res.set('Content-Type', 'text/plain');
  res.send(esea_push);
});

app.get('/whitelists/esea/6v6', function(req, res){
  res.set('Content-Type', 'text/plain');
  res.send(whitelist);
});

app.listen(8201);
console.log('Listening on port 8201');
