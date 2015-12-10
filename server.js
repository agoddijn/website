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
mongoose.connect(config.database);

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Server favicon
app.use(favicon(__dirname + '/client/content/images/logos/website-brand.png'));

//Routes
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.get('/:name', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.post('/sendMail', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var toSend = {
    "html": "<p>"+message+"</p>",
    "text": message,
    "subject": "From Website",
    "from_email": email,
    "from_name": name,
    "to": [{
      "email": "alex.goddijn@gmail.com",
      "name": "Alexander Goddijn",
      "type": "to"
    }]
  };
  mandrill_client.messages.send({"message": toSend}, function(result) {
    console.log(result);
    var status = result[0].status;
    if (status == 'sent') {
      res.send({success: true});
    } else {
      res.send({success: false, reason: status});
    };
  }, function(e) {
    console.log("Mandrill Error: "+e.message);
    res.send({success: false, error: e});
  });
});


//Serve static files
app.use(express.static(__dirname + '/client'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular-ui-bootstrap'));
app.use('/scripts', express.static(__dirname + '/node_modules/requirejs'));

//Log requests
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

//Start server
app.listen(config.port, function() {
  console.log('I\'m listening on port ' + config.port);
});
