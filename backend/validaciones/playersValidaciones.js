import { body, param, query } from 'express-validator';

export const crearJugadorValidations = [
  body('long_name').notEmpty().withMessage('El nombre completo es obligatorio'),
  body('player_positions').notEmpty().withMessage('La posición del jugador es obligatoria'),
  body('club_name').notEmpty().withMessage('El club del jugador es obligatorio'),
  body('nationality_name').notEmpty().withMessage('La nacionalidad del jugador es obligatoria'),
  body('overall').isNumeric().withMessage('El overall debe ser un número'),
  body('age').isNumeric().withMessage('La edad debe ser un número'),
];

export const editarJugadorValidations = [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('long_name').optional().isString().withMessage('El nombre completo debe ser un texto'),
  body('age').optional().isNumeric().withMessage('La edad debe ser un número'),
];

export const getPlayersValidations = [
  query('name').optional().isString().withMessage('El nombre debe ser un texto'),
  query('club').optional().isString().withMessage('El club debe ser un texto'),
  query('position').optional().isString().withMessage('La posición debe ser un texto'),
  query('page').optional().isNumeric().withMessage('La página debe ser un número'),
  query('pageSize').optional().isNumeric().withMessage('El tamaño de página debe ser un número'),
];

export const detallesJugadorValidations = [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
];
