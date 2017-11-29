const express = require('express')
const slidesConfig = require('../slidesConfig')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'iframe-carousel', slidesConfig: slidesConfig })
})

module.exports = router
