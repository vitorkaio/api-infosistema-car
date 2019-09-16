import * as mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
  board: { // placa
    type: String,
    unique: true,
    required: true
  },
  chassis: { // chassi
    type: String,
    unique: true,
    required: true
  },
  renavam: {
    type: String,
    unique: true,
    required: true
  },
  model: { // modelo
    type: String,
    required: true
  },
  brand: { // marca
    type: String,
    required: true
  },
  year: { // ano
    type: Number,
    required: true
  }
})

export default mongoose.model('Car', carSchema)