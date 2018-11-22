import Sequelize from 'sequelize'

const sequelize = new Sequelize('minesweeper', 'catherinepalmer', 'cake', {
  host: 'localhost',
  dialect: 'postgres'
})

const models = {
  Game: sequelize.import('./game')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models