var express = require('express');
var app = express();
var path = require('path');

app.get('/ul-element.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/ul-element.html'));
});

app.get('/toggle-element.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/toggle-element.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
    console.log('Web component listening on http://localhost:3000/');
});