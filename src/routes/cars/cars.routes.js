import express from 'express'
import * as CarsResolver from './cars.resolver'

const router = express.Router()

// GET /feed/posts
router.get('/', CarsResolver.getCars)
router.get('/:id', CarsResolver.getCar)
router.post('/', CarsResolver.createCar)
router.delete('/:id', CarsResolver.deleteCar)
router.patch('/:id', CarsResolver.updateCar)

router.get('/board/:board', CarsResolver.getCar)
router.delete('/board/:board', CarsResolver.deleteCar)
router.patch('/board/:board', CarsResolver.updateCar)



export default router