// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for comments
var comments = [];

// Endpoint to get all comments
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

// Endpoint to post a new comment
app.post('/api/comments', function(req, res) {
    var comment = req.body;
    comment.id = comments.length + 1; // Simple ID assignment
    comments.push(comment);
    res.status(201).json(comment);
});
