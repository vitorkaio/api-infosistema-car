require('dotenv').config()
config = require('../config/default')

should = require('should')
axios = require('axios')
chai = require('chai')

const expect = chai.expect;
const url = `http://localhost:${config.app.port}`;

describe("Find all the cars", () => {
  
  // Testa se o status da rota que procura todos os veículos é 200
  it("should receive a status of 200", (done) => {
    new Promise(() => {
      axios.get(url + '/cars').then(res => {
        expect(res.status).to.equal(200)
        done()
      })
      .catch(err => {
        done(err)
      })
    })
  })

  // Verifica se é um array de cars
  it("should receive a array of cars", (done) => {
    new Promise(() => {
      axios.get(url + '/cars').then(res => {
        expect(res.data.data).to.be.an('array')
        done()
      })
      .catch(err => {
        done(err)
      })
    })
  })

  // Testa se um id está cadastrado
  it("should get a status of 200 when searching for board", (done) => {
    new Promise(() => {
      axios.get(url + '/cars/board/lofed').then(res => {
        expect(res.status).to.equal(200)
        done()
      })
      .catch(err => {
        done(err)
      })
    })
  })

})
