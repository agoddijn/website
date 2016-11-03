// Call packages
var express   = require('express');
var bodyParser = require('body-parser');
var app       = express();
var morgan    = require('morgan');
var config    = require('./config.js');
var mongoose  = require('mongoose');
var path      = require('path');
var mandrill  = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.mandrillApi);
var favicon = require('serve-favicon');

// Set up morgan to log HTTP requests
app.use(morgan('dev'));

// Set up mongo database
mongoose.connect(config.database, function(error){
  if (error) console.error(error);
  else console.log('mongo connected');
});

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Server favicon
app.use(favicon(path.resolve('./client/content/images/logos/website-brand.png')));

//Serve static files
app.use(express.static(path.resolve('./client')));
app.use('/scripts', express.static(path.resolve('./node_modules/angular-ui-bootstrap')));
app.use('/scripts', express.static(path.resolve('./node_modules/requirejs')));

// Default Routes
app.get('/', function (req, res) {
  res.sendfile(path.resolve('./client/views/index.html'));
});
app.get('/:name', function (req, res) {
  res.sendfile(path.resolve('./client/views/index.html'));
});
app.get('/job/:name', function(req, res) {
  var name = req.params.name;
  var toSend = require(path.resolve('./data/jobs/' + name + '.js'));
  res.send(toSend);
});
app.get('/project/:name', function(req, res) {
  var name = req.params.name;
  var toSend = require(path.resolve('./data/projects/' + name + '.js'));
  res.send(toSend);
});

//Log requests
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

//Routes
app.post('/sendMail', require(__dirname + '/routes/sendMail.js'));
app.post('/login', require(__dirname + '/routes/login.js'));
app.post('/register', require(__dirname + '/routes/register.js'));

//Start server
app.listen(config.port, function() {
  console.log('I\'m listening on port ' + config.port);
});
