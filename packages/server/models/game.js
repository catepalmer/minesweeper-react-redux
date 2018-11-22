export default (sequelize, DataTypes) => {
  const Game = sequelize.define('game', {
    game_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    flags: DataTypes.ARRAY(DataTypes.INTEGER),
    mines: DataTypes.ARRAY(DataTypes.INTEGER),
    moves: DataTypes.ARRAY(DataTypes.INTEGER)
  })

  return Game
}