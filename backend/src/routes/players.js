import { Router } from 'express';
import { crearJugador, detallesJugador, editarJugador, getPlayers,  } from '../controllers/playersController.js';
import { getUserInfo } from '../controllers/authController.js';
import { validacion } from '../middleware/authMiddleware.js';
import { crearJugadorValidations, detallesJugadorValidations, editarJugadorValidations, getPlayersValidations } from '../../validaciones/playersValidaciones.js';

const router = Router();

router.get('/getPlayers', getPlayersValidations ,  getPlayers);
router.get('/detallesJugador/:id', detallesJugadorValidations ,detallesJugador);
router.put('/editarJugador/:id',validacion, editarJugadorValidations,editarJugador);
router.post('/crearJugador', validacion, crearJugadorValidations , crearJugador);
router.post('/informacionUsuario', validacion,getUserInfo)


export default router;
