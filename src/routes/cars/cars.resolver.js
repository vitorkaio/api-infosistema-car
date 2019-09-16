import * as CarController from './cars.controller'
import { ResponseSuccess, ResponseFail } from '../response/response'
import codes from '../response/code'
import messages from '../response/messages'


// Retorna todos os veículos
export const getCars = async (_, res) => {
  try {
    const result = await CarController.getCars()
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    responseErrors(res, err)
  }
}


// Pega um veículo
export const getCar = async (req, res) => {
  try {
    const result = await CarController.findCar(req.params)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    responseErrors(res, err)
  }
}


// Insere um novo veículo
export const createCar = async (req, res) => {
  try {
    const result = await CarController.createCar(req.body)
    ResponseSuccess(res, codes.CREATE, result)
  } 
  catch (err) {
    responseErrors(res, err)
  }
}


// Remove um veículo pelo id
export const deleteCar = async (req, res) => {
  try {
    const result = await CarController.deleteCar(req.params)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    responseErrors(res, err)
  }
}


// Atualiza um veículo
export const updateCar = async (req, res) => {
  try {
    const result = await CarController.updateCar(req.params, req.body)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    responseErrors(res, err)
  }
}

// Gerencia as mensagens de erros
const responseErrors = async (res, err) => {
  if (err === null) ResponseFail(res, codes.NOT_FOUND, messages.NOT_FOUND)
  else if (err['name'] === 'CastError') ResponseFail(res, codes.ERROR, messages.CAST_ID)
  else if (err['name'] === 'MongoError' && err.code === 11000) ResponseFail(res, codes.ERROR, err.errmsg)
  else ResponseFail(res, codes.ERROR, err)
}