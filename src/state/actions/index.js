import { MINE_CLICKED, SQUARE_CLICKED, SQUARE_RIGHT_CLICKED } from '..'

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

function squareRightClicked (square) {
  return {
    type: SQUARE_RIGHT_CLICKED,
    payload: {
      square
    }
  }
}

export { mineClicked, squareClicked, squareRightClicked }