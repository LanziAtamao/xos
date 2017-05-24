/* ------------------ main requirements ------------------ */
var express = require('express')
var path = require('path')

var app = express()

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/users', (req, res, next) => {
  res.render('list', {title: 'Bonjour depuis Users App'})
})

module.exports = app
