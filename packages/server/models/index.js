const Sequelize = require('sequelize')

const sequelize = new Sequelize('minesweeper', 'catherinepalmer', 'cake', {
    host: 'localhost',
    dialect: 'postgres'
})

const db = {
    Game: sequelize['import']('./game')
}

// db.sequelize = sequelize
// db.Sequelize = Sequelize

module.exports = db