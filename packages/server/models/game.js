export default (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: DataTypes.UUIDV1,
    flags: DataTypes.ARRAY(DataTypes.INTEGER),
    mines: DataTypes.ARRAY(DataTypes.INTEGER),
    moves: DataTypes.ARRAY(DataTypes.INTEGER)
  })

  return Game
}