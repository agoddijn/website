// Call packages
var express   = require('express');
var bodyParser = require('body-parser');
var app       = express();
var morgan    = require('morgan');
var config    = require('./config.js');
var path      = require('path');
var favicon = require('serve-favicon');

// Set up morgan to log HTTP requests
app.use(morgan('dev'));

// Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Server favicon
app.use(favicon(path.resolve('./data/images/logos/website-favicon.png')));

//Serve static files
app.use(express.static(path.resolve('./client')));
app.use('/scripts', express.static(path.resolve('./node_modules/angular-ui-bootstrap')));
app.use('/additional', express.static(path.resolve('./additional_modules')));
app.use('/images', express.static(path.resolve('./data/images')));
app.use('/code', express.static(path.resolve('./data/code')));
app.use('/cv', express.static(path.resolve('./data/resume/resume.pdf')));

// Default Routes
app.get('/api/jobs', function(req, res) {
    var jobNames = ["autonomos", "n26", "routific", "tomtom", "palantir"]
    var jobs = []
    jobNames.forEach(job => {
        jobs.push(require(path.resolve('./data/jobs/' + job + '.js')))
    })
    jobs.forEach(job => {
        var endDateString = job.dates.split("-")[1].trim();
        if (endDateString == "Present") {
            job.endDate = Date.now();
        } else {
            job.endDate =  Date.parse(endDateString);
        }
    })
    jobs.sort((a, b) => b.endDate - a.endDate);
    res.send(jobs)
})
app.get('/api/projects', function(req, res) {
    var projectNames = ["halp", "website", "ubcInsight", "uniserve", "youtube", "morseToSpeech",  "zenflow"]
    var projects = []
    projectNames.forEach(project => {
        projects.push(require(path.resolve('./data/projects/' + project + '.js')))
    })
    projects.forEach(project => {
        var endDateString = project.dates.split("-")[1].trim();
        var endDate = Date.parse(endDateString);
        project.endDate = endDate;
    })
    projects.sort((a, b) => b.endDate - a.endDate);
    res.send(projects)
})
app.get('/api/blogs', function(req, res) {
    var blogNames = ["automotive", "ai", "donotdisturb"]
    var blogs = []
    blogNames.forEach(blog => {
        blogs.push(require(path.resolve('./data/blogs/' + blog + '.js')))
    })
    blogs.sort((a, b) => b.date - a.date);
    res.send(blogs)
})

app.get('/*', function (req, res) {
    res.sendfile(path.resolve('./client/views/index.html'));
});

//Start server
app.listen(config.port, function() {
    console.log('I\'m listening on port ' + config.port);
});
