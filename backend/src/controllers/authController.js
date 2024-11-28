import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'






//Registrar Usuario
export const registrarUsuario = async(req, res ) => {
    const {username, email , password} = req.body


    try {
        const existeUsuario = await User.findOne({where: {email}});
        if(existeUsuario){
            return res.status(400).json({message:'El correo ya esta registrado'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const nuevoUsuario = await User.create({username, email, password:hashedPassword});

        const token = jwt.sign(
            { id: nuevoUsuario.id, email: nuevoUsuario.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        )

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: nuevoUsuario,
            token,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }




}




// Login de usuario
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
  
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({
        message: 'Login exitoso',
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el login', error });
    }



};
  




// Logout de usuario
    export const logoutUser = (req, res) => {
    res.json({ message: 'Logout exitoso' });




};


// informacion de usuario

export const getUserInfo = async (req, res) => {
    try {
      // Aquí puedes acceder a los datos del usuario usando req.user
      const user = req.user;
  
      // Retorna la información del usuario
      res.json({ username: user.username, email: user.email });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la información del usuario', error });
    }
  };