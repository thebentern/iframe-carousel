const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')))
app.use('/stylesheets', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))

const index = require('./routes/index')

app.use('/', index)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
