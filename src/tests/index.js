const port = 3000
const hippie = require('hippie')
const app = require('../app.js').listen(port)
const chai = require('chai')
const expect = chai.expect
const cheerio = require('cheerio')

describe('Main page', () => {
  after(done => {
    app.close(done)
  })
  context('Given slides with urls and titles', () => {
    it('creates iframes and title headrs', done => {
      hippie(app)
        .get('/')
        .expectStatus(200)
        .end((err, response, body) => {
          const $ = cheerio.load(body)
          expect($('h3')[0].children[0].data).to.equal('htop')
          expect($('h3')[1].children[0].data).to.equal('nettop')
          expect($('iframe')[0].attribs.src).to.equal('http://127.0.0.1:8080/')
          expect($('iframe')[1].attribs.src).to.equal('http://127.0.0.1:8081/')
          done(err)
        })
      })
    })
})
