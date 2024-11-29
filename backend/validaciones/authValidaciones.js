import { body } from 'express-validator' 

export const registrarUsuarioValidations = [
  body('username').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  body('email').isEmail().withMessage('El correo no es válido'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('La contraseña debe tener al menos 5 caracteres'),
];

export const loginUserValidations = [
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').notEmpty().withMessage('La contraseña es obligatoria'),
];