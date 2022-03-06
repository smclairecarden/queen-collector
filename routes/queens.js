import { Router } from 'express'
import * as queensCtrl from '../controllers/queens.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', queensCtrl.index)
router.get('/new', isLoggedIn, queensCtrl.new)
router.get('/:id', queensCtrl.show)
router.get('/:id/edit', isLoggedIn, queensCtrl.edit)

router.post('/', isLoggedIn, queensCtrl.create)
router.post('/:id/reads', isLoggedIn, queensCtrl.createRead)

router.put('/:id', isLoggedIn, queensCtrl.update)

router.delete('/:id', isLoggedIn, queensCtrl.deleteQueen)

export {
  router
}