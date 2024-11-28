import { Router } from 'express';
import { crearJUgador, detallesJugador, editarJugador, getPlayers,  } from '../controllers/playersController.js';
import { getUserInfo } from '../controllers/authController.js';
import { validacion } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/getPlayers',  getPlayers);
router.get('/detallesJugador/:id',detallesJugador);
router.put('/editarJugador/:id', validacion,editarJugador);
router.post('/crearJugador', validacion, crearJUgador);
router.post('/informacionUsuario', validacion,getUserInfo)


export default router;
