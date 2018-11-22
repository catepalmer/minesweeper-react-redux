export default (sequelize, DataTypes) => {
  const Game = sequelize.define('game', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4
    // },
    flags: DataTypes.ARRAY(DataTypes.INTEGER),
    mines: DataTypes.ARRAY(DataTypes.INTEGER),
    moves: DataTypes.ARRAY(DataTypes.INTEGER)
  })

  return Game
}




// sequelize.define('collection', {
//   uid: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true // Automatically gets converted to SERIAL for postgres
//   }
// });

// sequelize.define('collection', {
//   uuid: {
//     type: Sequelize.UUID,
//     primaryKey: true
//   }
// });


// export default (sequelize, DataTypes) => {
//   const Game = sequelize.define('game', {
//     id: DataTypes.UUIDV1,
//     flags: DataTypes.ARRAY(DataTypes.INTEGER),
//     mines: DataTypes.ARRAY(DataTypes.INTEGER),
//     moves: DataTypes.ARRAY(DataTypes.INTEGER)
//   })

//   return Game
// }