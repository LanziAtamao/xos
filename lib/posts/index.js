/* ------------------ main requirements ------------------ */
var express = require('express')
var path = require('path')

var config = require(path.join(process.cwd(), 'config'));

var app = express()
config.run(app)


app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/posts', (req, res, next) => {
  res.render('list', {title: 'Bonjour depuis Post App'})
})

module.exports = app
