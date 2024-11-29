import Player from "../models/Players.js";
import { Op } from "sequelize";


// Traer Jugadores
export const getPlayers = async(req, res) => {

    const {name, club, position, page = 1 , pageSize = 10} = req.query;

    try {
        const where = {};
        if (name) where.name = { [Op.like]: `%${name}%` };
        if (club) where.club = { [Op.like]: `%${club}%` };
        if (position) where.position = { [Op.like]: `%${position}%` };
    
        const players = await Player.findAndCountAll({
          where,
          limit: pageSize,
          offset: (page - 1) * pageSize,
        });
    
        res.json({
          players: players.rows,
          total: players.count,
          page,
          pageSize
        });
      } catch (error) {
        res.status(500).json({ message: 'Error al traer jugadores', error });
      }



}


// Detalle jugador
export const detallesJugador = async(req, res) => {
    
    const playerId = req.params.id;

  try {
    const player = await Player.findByPk(playerId);
    if (!player) return res.status(404).json({ message: 'Jugador no encontrado' });

    res.json(player);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar jugador servidor', error });
  }
};


// Editar jugador 

export const editarJugador = async (req, res) => {
    const playerId = req.params.id; 
    const { long_name, player_positions, club_name, nationality_name, overall, potential, value_eur, age, dribbling, defending, physic } = req.body;
  
    try {
      const player = await Player.findByPk(playerId);
      
      if (!player) {
        return res.status(404).json({ message: 'Jugador no encontrado' });
      }
  
      // aca se actualiza 
      await player.update({
        long_name,
        player_positions,
        club_name,
        nationality_name,
        overall,
        potential,
        value_eur,
        age,
        dribbling,
        defending,
        physic
      });
  
      res.json({ message: 'Jugador editado/Actualizado exitosamente', player });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar jugador', error });
    }
  };



// Crear jugador

export const crearJugador = async (req, res) => {
    const { long_name, player_positions, club_name, nationality_name, overall, potential, value_eur, age, dribbling, defending, physic } = req.body;
  
    try {
      const newPlayer = await Player.create({
        long_name,
        player_positions,
        club_name,
        nationality_name,
        overall,
        potential,
        value_eur,
        age,
        dribbling,
        defending,
        physic
      });
  
      res.status(201).json({ message: 'Player created successfully', newPlayer });
    } catch (error) {
      res.status(500).json({ message: 'Error creating player', error });
    }
  };