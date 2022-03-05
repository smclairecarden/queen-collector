import { Router } from 'express'
import * as queensCtrl from '../controllers/queens.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', queensCtrl.index)
router.get('/new', isLoggedIn, queensCtrl.new)
router.get('/:id', queensCtrl.show)
router.get('/:id/edit', isLoggedIn, queensCtrl.edit)

router.post('/', isLoggedIn, queensCtrl.create)

router.put('/:id', isLoggedIn, queensCtrl.update)

export {
  router
}