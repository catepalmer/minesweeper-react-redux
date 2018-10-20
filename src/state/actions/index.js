import { BLANK_SQUARE_CLICKED, SQUARE_CLICKED } from '..'
import { getSquaresTouching } from '../../utilities'

function blankSquareClicked (square) {
    const squaresTouching = getSquaresTouching(square)

    return {
      type: BLANK_SQUARE_CLICKED,
      payload: {
        square,
        squaresTouching
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

export { blankSquareClicked, squareClicked }