import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Player = sequelize.define('Player', {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  player_face_url: { 
    type: DataTypes.STRING 
  },
  long_name: { 
    type: DataTypes.STRING 
  },
  player_positions: { 
    type: DataTypes.STRING 
  },
  club_name: { 
    type: DataTypes.STRING 
  },
  nationality_name: { 
    type: DataTypes.STRING 
  },
  overall: { 
    type: DataTypes.INTEGER 
  },
  potential: { 
    type: DataTypes.INTEGER 
  },
  value_eur: { 
    type: DataTypes.INTEGER 
  },
  age: { 
    type: DataTypes.INTEGER 
  },
  dribbling: {  // Corregir la ortografía de 'dribbling'
    type: DataTypes.INTEGER
  },
  defending: {  // Agregar el campo 'defending'
    type: DataTypes.INTEGER
  },
  physic: {  // Agregar el campo 'physic'
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false, // Desactivar la generación automática de createdAt y updatedAt
});

export default Player;
