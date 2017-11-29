const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

var slides = []
try {
  slides = yaml.safeLoad(fs.readFileSync('slides.yml', 'utf8'))
  console.log(`Loading slides: ${JSON.stringify(slides)}`)
} catch (ex) {
  console.log(ex)
}

module.exports = slides
