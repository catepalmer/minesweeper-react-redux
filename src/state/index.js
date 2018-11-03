import { mineClicked, squareClicked, squareRightClicked } from './actions'
import { MINE_CLICKED, SQUARE_CLICKED, SQUARE_RIGHT_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getFlags, getLosingSquare, getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  getFlags,
  getLosingSquare,
  getMoves,
  initialState,
  MINE_CLICKED,
  mineClicked,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked,
  SQUARE_RIGHT_CLICKED,
  squareRightClicked
}