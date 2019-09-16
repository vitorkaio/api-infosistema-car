require('dotenv').config()
config = require('../config/default')

should = require('should')
axios = require('axios')
chai = require('chai')

const expect = chai.expect;
const url = `http://localhost:${config.app.port}`;

describe("Delete a car with board: lofed", () => {
  
  // Testa se o status da remoção de um novo carro é 200
  it("should receive a status of 200", (done) => {
    new Promise(() => {
      axios.delete(url + '/cars/board/lofed').then(res => {
        expect(res.status).to.equal(200)
        done()
      })
      .catch(err => {
        done(err)
      })
    })
  })

})

