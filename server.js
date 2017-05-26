// Core requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Secondary requiremnt


// Require Application
var posts = require('./lib/posts')
var users = require('./lib/users')

// Express Instanciated
var app = express();

// Fire up the applications
app.use(posts);
app.use(users);

// Run the server
app.listen(3000);
console.log('Application is up and running on Port :3000');
