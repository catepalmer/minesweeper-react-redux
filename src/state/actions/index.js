import { MINE_CLICKED, SQUARE_CLICKED } from '..'

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

export { mineClicked, squareClicked }