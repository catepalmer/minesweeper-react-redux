import { GAME_LOST, GAME_WON, SQUARE_CLICKED } from '..'

function gameLost (square, mines) {
  return {
    type: GAME_LOST,
    payload: {
      square,
      mines
    }
  }
}

function squareClicked (square) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      square
    }
  }
}

export { gameLost, squareClicked }