import Car from './cars.model'

// Retorna todos os veículos
export const getCars = async () => {
  try {
    const res = await Car.find({})
    return res
  } 
  catch (err) {
    throw new Error(err)
  }
}


// Insere um novo veículo
export const createCar = async (data) => {
  try {
    const res = await Car.create(data)
    return res
  } 
  catch (err) {
    throw (err)
  }
}


// Remove veículo por id
const _removeCarById = async (id) => {
  try {
    const res = await Car.findByIdAndRemove(id)
    if (res) {
      return res
    }
    else throw('Not Found!')
  } 
  catch (err) {
    throw (err)
  }
}


// Remove um veículo
export const deleteCar = async (filter) => {
  const { id } = filter

  if (id) {
    return _removeCarById(id)
  }

  else {
    throw('Empty id')
  }

}
