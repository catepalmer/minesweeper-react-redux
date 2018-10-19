import { minesSet, squareClicked } from './actions'
import { MINES_SET, SQUARE_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getMines, getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  getMines,
  getMoves,
  initialState,
  MINES_SET,
  minesSet,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked
}