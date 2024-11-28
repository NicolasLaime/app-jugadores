import express from 'express'; 
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import sequelize from './config/database.js'; 
import playersRoutes from './routes/players.js'; 
import authRoutes from './routes/auth.js'


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/jugadores', playersRoutes);
app.use('/api/auth', authRoutes);


// Sincronizar base de datos
sequelize.sync()
  .then(() => {
      console.log('Conectado a la base de datos exitosamente!');
      // Iniciar servidor solo después de que la base de datos esté lista
      app.listen(PORT, () => {
          console.log(`Server corriendo en : http://localhost:${PORT}`);
      });
  })
  .catch(err => {
      console.error('Error al conectarse a la base de datos: ', err);
  });
