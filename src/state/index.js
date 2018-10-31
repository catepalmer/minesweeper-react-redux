import { mineClicked, squareClicked } from './actions'
import { MINE_CLICKED, SQUARE_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getLosingSquare, getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  getLosingSquare,
  getMoves,
  initialState,
  MINE_CLICKED,
  mineClicked,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked
}