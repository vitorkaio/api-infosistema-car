require('dotenv').config()
config = require('../config/default')

should = require('should')
axios = require('axios')
chai = require('chai')

const expect = chai.expect;
const url = `http://localhost:${config.app.port}`;

describe("Create new car with board: lofed", () => {
  
  // Testa se o status da criação de um novo carro é 201
  it("should receive a status of 201", (done) => {
    new Promise(() => {
      const newCar = {
        board: "lofed",
        chassis: "dasd5",
        renavam: "dw9d",
        model: "kgir",
        brand: "audi r8",
        year: 2016
      }
      axios.post(url + '/cars', newCar).then(res => {
        expect(res.status).to.equal(201)
        done()
      })
      .catch(err => {
        done(err)
      })
    })
  })

})