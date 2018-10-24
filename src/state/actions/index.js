import { SQUARE_CLICKED } from '..'

function squareClicked (squares) {
  return {
    type: SQUARE_CLICKED,
    payload: {
      squares
    }
  }
}

export { squareClicked }