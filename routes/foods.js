import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//localhost:3000/foods
router.get('/', foodsCtrl.index)

// localhost:3000/foods/mew
router.get('/new', foodsCtrl.new)

// localhost:3000/foods/:id 
router.get('/:id', foodsCtrl.show)

// localhost:3000/foods
router.post('/', isLoggedIn, foodsCtrl.createFood)

export{
  router
}