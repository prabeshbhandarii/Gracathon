
import express from 'express'
import { createUser, loginUser, logoutUser, updateUser } from '../controllers/user.controller.js'
import { authMiddleware } from '../middleware/authUserMiddleware.js'

const router = express.Router()


router.post('/signup', createUser)
router.post('/login', loginUser)

router.use(authMiddleware)

router.get("/logout", logoutUser)
router.post("/update", updateUser)



export default router