import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'

const router = Router()

router.get('/new', foodsCtrl.new)

export{
  router
}