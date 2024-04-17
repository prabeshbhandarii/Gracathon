

import express from 'express'
import { authHospitalMiddleware } from '../middleware/authHospitalMiddleware.js'
import { createDoctor, loginHospital, logoutHospital, registerHospital } from '../controllers/hospital.controller.js'
import { upload } from '../middleware/multerMiddleware.js'


const router = express.Router()


router.post('/signup', registerHospital)
router.post('/login', loginHospital)
router.get('/logout', logoutHospital)


router.use(authHospitalMiddleware)

router.post("/createDoctor", upload.single("doctor"), createDoctor )

export default router