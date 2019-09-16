import Car from './cars.model'

// Retorna todos os veículos
export const getCars = async () => {
  try {
    const res = await Car.find({})
    return res
  } 
  catch (err) {
    throw (err)
  }
}


// Pesquisa um veículo pelo id.
const _findCarById = async (id) => {
  try {
    const res = await Car.findById(id)
    if (res) {
      return res
    }
    else throw(null)
  } 
  catch (err) {
    throw (err)
  }
}


// Pega um veículo
export const findCar = async (filter) => {
  const { id } = filter
  if (id) {
    return _findCarById(id)
  }
  else {
    throw(null)
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
    else throw(null)
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
    throw(null)
  }

}


// Atualiza um veículo pelo id
const _findCarAndUpdate = async (id, data) => {
  try {
    const ops = {runValidators: true, new: true}
    const res = await Car.findByIdAndUpdate(id, {...data}, ops)
    if (res) {
      return res
    }
    else throw(null)  
  } 
  catch (err) {
    throw(err)
  }
}


// Atualiza um veículo
export const updateCar = async (filter, data) => {
  const { id } = filter
console.log(id, data)
  if (id) {
    return _findCarAndUpdate(id, data)
  }

  else {
    throw(null)
  }

}
