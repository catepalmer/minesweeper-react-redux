import { mineClicked, minesSet, squareClicked, squareRightClicked } from './actions'
import { MINE_CLICKED, MINES_SET, SQUARE_CLICKED, SQUARE_RIGHT_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getFlagged, getLosingSquare, getMines, getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  getFlagged,
  getLosingSquare,
  getMines,
  getMoves,
  initialState,
  MINE_CLICKED,
  mineClicked,
  MINES_SET,
  minesSet,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked,
  SQUARE_RIGHT_CLICKED,
  squareRightClicked
}