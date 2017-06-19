var express = require('express');
var app = express();
var path = require('path');
var timeStampService = require('./app/service/timeStampService.js');
var routing = require('./app/routing/routing.js');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/guide'));

timeStampService(app);
routing(app);

app.listen(port);
