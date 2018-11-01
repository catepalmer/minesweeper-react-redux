import { not } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { MINE_CLICKED, SQUARE_CLICKED, SQUARE_RIGHT_CLICKED } from '..'

const initialState = { moves: [], isFlagged: false }

function rootReducer (state = initialState, { payload = {}, type }) {
  const { square } = payload
  switch (type) {
      case MINE_CLICKED:
      return {
        ...state,
        losingSquare: square
      }
    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(square) ? state.moves : [...state.moves, square]
      }
      case SQUARE_RIGHT_CLICKED:
      return {
        ...state,
        isFlagged: not(state.isFlagged)
      }
    default:
      return state
  }
}

export { initialState, rootReducer }