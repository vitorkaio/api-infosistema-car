import express from 'express'
import * as CarsResolver from './cars.resolver'

const router = express.Router()

// GET /feed/posts
router.get('/', CarsResolver.getCars)
router.get('/:id', CarsResolver.getCar)
router.post('/', CarsResolver.createCar)
router.delete('/:id', CarsResolver.deleteCar)
router.patch('/:id', CarsResolver.updateCar)


export default router