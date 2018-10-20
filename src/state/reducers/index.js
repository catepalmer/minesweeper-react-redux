import { forEach } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { BLANK_SQUARE_CLICKED, SQUARE_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case BLANK_SQUARE_CLICKED:
    return {
      ...state,
      moves: isUndefined(payload.square)
        ? state.moves
        : [...state.moves, payload.square, forEach((square => square), payload.squaresTouching)]
    }
    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(payload.square)
          ? state.moves
          : [...state.moves, payload.square]
      }
    default:
      return state
  }
}

export { initialState, rootReducer }