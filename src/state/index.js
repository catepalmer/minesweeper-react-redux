import { gameLost, gameWon, squareClicked } from './actions'
import { GAME_LOST, GAME_WON, SQUARE_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getLosingSquare, getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  GAME_LOST,
  gameLost,
  GAME_WON,
  gameWon,
  getLosingSquare,
  getMoves,
  initialState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked
}