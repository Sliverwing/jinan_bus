var express = require('express');
var serveStatic = require('serve-static')

var app = express();
app.use(serveStatic('public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);