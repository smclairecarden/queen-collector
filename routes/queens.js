import { Router } from 'express'
import * as queensCtrl from '../controllers/queens.js'

const router = Router()

router.get('/', queensCtrl.index)
router.get('/new', queensCtrl.new)
router.get('/:id', queensCtrl.show)

router.post('/', queensCtrl.create)

export {
  router
}