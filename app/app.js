var express = require('express');
var serveStatic = require('serve-static')
var http = require('./utils/http')

var app = express();
app.use(serveStatic('public'));

// Config
const baseUrl = 'http://60.216.101.229/server-ue2/rest';

// Search Bus line
app.get('/api/search/:line', (req, resp) => {
    let reqUrl = baseUrl + '/buslines/simple/370100/' + req.params.line + '/0/200'
    http.get( reqUrl )
        .then( r => {
            resp.json(r.data);
        }, r => {
            throw r;
        })
});
// Get Bus Station
app.get('/api/busline/:id', (req, resp) => {
    let reqUrl = baseUrl + '/buslines/370100/' + req.params.id;
    http.get( reqUrl )
        .then( r => {
            resp.json(r.data);
        }, r => {
            throw r;
        })
});

// Get Bus Current Position
app.get('/api/busline/:id/position', (req, resp) => {
    let reqUrl = baseUrl + '/buses/busline/370100/' + req.params.id;
    http.get( reqUrl )
        .then( r => {
            resp.json(r.data);
        }, r => {
            throw r;
        })
});

app.listen(3000);