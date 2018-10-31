import { GAME_LOST, GAME_WON, MINE_CLICKED, SQUARE_CLICKED } from '..'

function gameLost (square) {
  return {
    type: GAME_LOST,
    payload: {
      square
    }
  }
}

function mineClicked (square) {
  return {
    type: MINE_CLICKED,
    payload: {
      square
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

export { gameLost, mineClicked, squareClicked }