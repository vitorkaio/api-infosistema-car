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


// Pesquisa um veículo pelo filtro passado
const _findCarByFilter = async (filter, data) => {
  try {
    const res = await Car.findOne({[filter]: data})
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
  const { id, board } = filter
  if (id) {
    return _findCarByFilter("_id", id)
  }
  else if (board) {
    return _findCarByFilter("board", board)
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


// Remove veículo por filter
const _removeCarByFilter = async (type, data) => {
  try {
    const res = await Car.findOneAndRemove({[type]: data})
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
  const { id, board } = filter

  if (id) {
    return _removeCarByFilter('_id', id)
  }
  else if(board) {
    return _removeCarByFilter('board', board)
  }
  else {
    throw(null)
  }

}


// Atualiza um veículo pelo filter
const _findCarAndUpdate = async (type, filter, data) => {
  try {
    const ops = {runValidators: true, new: true}
    const res = await Car.findOneAndUpdate({[type]: filter}, {...data}, ops)
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
  const { id, board } = filter

  if (id) {
    return _findCarAndUpdate('_id', id, data)
  }
  else if(board) {
    return _findCarAndUpdate('board', board, data)
  }
  else {
    throw(null)
  }

}
