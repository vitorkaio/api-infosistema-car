import * as CarController from './cars.controller'
import { ResponseSuccess, ResponseFail } from '../response/response'
import codes from '../response/code'

// Retorna todos os veículos
export const getCars = async (_, res) => {
  try {
    const result = await CarController.getCars()
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    ResponseFail(res, codes.ERROR, err)
  }
}


// Pega um veículo
export const getCar = async (req, res) => {
  try {
    const result = await CarController.findCar(req.params)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    if (err === null) ResponseFail(res, codes.NOT_FOUND, "Not Found!")
    else ResponseFail(res, codes.ERROR, err)
  }
}


// Insere um novo veículo
export const createCar = async (req, res) => {
  try {
    const result = await CarController.createCar(req.body)
    ResponseSuccess(res, codes.CREATE, result)
  } 
  catch (err) {
    ResponseFail(res, codes.ERROR, err)
  }
}


// Remove um veículo pelo id
export const deleteCar = async (req, res) => {
  try {
    const result = await CarController.deleteCar(req.params)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    if (err === null) ResponseFail(res, codes.NOT_FOUND, "Not Found!")
    else ResponseFail(res, codes.ERROR, err)
  }
}


// Atualiza um veículo
export const updateCar = async (req, res) => {
  try {
    const result = await CarController.updateCar(req.params, req.body)
    ResponseSuccess(res, codes.OK, result)
  } 
  catch (err) {
    if (err === null) ResponseFail(res, codes.NOT_FOUND, "Not Found!")
    else ResponseFail(res, codes.ERROR, err)
  }
}