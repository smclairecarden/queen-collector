import { Router } from 'express'
import * as queensCtrl from '../controllers/queens.js'

const router = Router()

router.get('/', queensCtrl.index)

export {
  router
}