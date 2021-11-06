import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//localhost:3000/foods - GET
router.get('/', foodsCtrl.index)

// localhost:3000/foods/mew - GET
router.get('/new', foodsCtrl.new)

// localhost:3000/foods/:id - GET
router.get('/:id', foodsCtrl.show)

//localhost:3000/foods/:id - GET
router.get('/:id/edit', isLoggedIn, foodsCtrl.edit)

// localhost:3000/foods - POST
router.post('/', isLoggedIn, foodsCtrl.createFood)

// localhost:3000/foods/:id/review
router.post('/:id/reviews', isLoggedIn, foodsCtrl.createReview)

// localhost:3000/food/:id - DELETE
router.delete('/:id', isLoggedIn, foodsCtrl.delete)

// localhost:3000/foods/:id - PUT
router.put('/:id', isLoggedIn, foodsCtrl.update)


export{
  router
}