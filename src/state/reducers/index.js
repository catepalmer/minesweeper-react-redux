import { isUndefined } from 'ramda-adjunct'

import { MINES_SET, SQUARE_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case MINES_SET:
      return {
        ...state,
        mines: state.mines
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