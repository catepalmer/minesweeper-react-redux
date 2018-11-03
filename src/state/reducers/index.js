import { map, not, times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { MINE_CLICKED, SQUARE_CLICKED, SQUARE_RIGHT_CLICKED } from '..'

const initialState = { moves: [], isFlagged: times((x => false), 81) }

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
        isFlagged: state.isFlagged.map((bool, i) => i === square ? not(bool)
                                                                 : bool)
      }
    default:
      return state
  }
}

export { initialState, rootReducer }