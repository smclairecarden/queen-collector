import { Router } from 'express'
import { index } from '../controllers/queens.js'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:profileId', isLoggedIn, profilesCtrl.showQueen)

router.delete('/favorites/:id', isLoggedIn, profilesCtrl.deleteFavorite)

export {
  router
}