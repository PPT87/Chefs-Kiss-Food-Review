import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'

const router = Router()

//localhost:3000/foods
router.get('/', foodsCtrl.index)

// localhost:3000/foods/mew
router.get('/new', foodsCtrl.new)

// localhost:3000/foods
router.post('/', foodsCtrl.create)

export{
  router
}