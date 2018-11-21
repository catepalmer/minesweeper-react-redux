const { contains, length, not } = require('ramda')

function setMines (mines = []) {
  const square = Math.floor(Math.random() * 81)

  if (length(mines) === 10) {
    return mines
  }

  if (not(contains(square, mines))){
    mines.push(square)
  }

  return setMines(mines)
}

module.exports = setMines