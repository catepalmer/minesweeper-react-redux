import { MINES_SET, SQUARE_CLICKED } from '..'

function minesSet (mines) {
    return {
      type: MINES_SET,
      payload: {
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

export { minesSet, squareClicked }