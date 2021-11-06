import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// localhost:3000/community - GET
router.get('/', profilesCtrl.index)

// localhost:3000/community/:id - GET
router.get('/:id', profilesCtrl.show)

export {
  router
}