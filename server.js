// Core requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// Secondary requiremnt


// Require Application
var posts = require('./lib/posts')
var account = require('./lib/account')

// Express Instanciated
var app = express();

// Set middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'lib/assets')));

// Fire up the applications
app.use('/posts',posts);
app.use('/account', account);

// Run the server
app.listen(3000);
console.log('Application is up and running on Port :3000');
