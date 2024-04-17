
import express from 'express'
import { createUser, loginUser, logoutUser } from '../controllers/user.controllers.js'
import { authMiddleware } from '../middleware/authUserMiddleware.js'

const router = express.Router()


router.post('/signup', createUser)
router.post('/login', loginUser)

router.use(authMiddleware)
router.get("/logout", logoutUser)



export default router