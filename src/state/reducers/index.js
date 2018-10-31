import { isUndefined } from 'ramda-adjunct'

import { GAME_LOST, GAME_WON, SQUARE_CLICKED } from '..'

const initialState = { moves: [] }

function rootReducer (state = initialState, { payload = {}, type }) {
  const { square, mines = '' } = payload
  switch (type) {
    case GAME_LOST:
      return {
        ...state,
        losingSquare: square,
        mines
      }
    case SQUARE_CLICKED:
      return {
        ...state,
        moves: isUndefined(square) ? state.moves : [...state.moves, square]
      }
    default:
      return state
  }
}

export { initialState, rootReducer }