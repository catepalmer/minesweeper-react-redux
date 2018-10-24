import { concat, uniq } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { SQUARE_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(payload.squares)
          ? state.moves
          : uniq(concat(state.moves, payload.squares))
      }
    default:
      return state
  }
}

export { initialState, rootReducer }