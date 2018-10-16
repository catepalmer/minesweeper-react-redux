import { contains, length, not } from 'ramda'

export default function setMines (mines = []) {
  const idx = Math.floor(Math.random() * 81)

  if (length(mines) === 10) {
    return mines
  }

  if (not(contains(idx, mines))){
    mines.push(idx)
  }

  return setMines(mines)
}