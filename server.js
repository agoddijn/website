// Call packages
var express   = require('express');
var app       = express();
var morgan    = require('morgan');
var config    = require('./config.js');
var mongoose  = require('mongoose');
var path      = require('path');

// Set up morgan to log HTTP requests
app.use(morgan('dev'));

// Set up mongo database
mongoose.connect(config.database);

//Routes
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.get('/:name', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

//Serve static files
app.use(express.static(__dirname + '/client'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular-route'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular-ui-bootstrap'));
app.use('/style', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/style', express.static(__dirname + '/node_modules/font-awesome/css'));

//Log requests
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});



app.listen(config.port, function() {
  console.log('I\'m listening on port ' + config.port);
});

