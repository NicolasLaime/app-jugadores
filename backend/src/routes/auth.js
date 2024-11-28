import { Router } from "express";
import { loginUser, logoutUser, registrarUsuario } from "../controllers/authController.js";



const router = Router()


router.post('/registrarUsuario', registrarUsuario)
router.post('/login', loginUser)
router.post('/logout', logoutUser)




export default router