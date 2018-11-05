import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { head, length, union } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import { getMoves, SQUARE_CLICKED } from '../..'
import { checkIfPlayed, getMinesTouching, getSquaresTouching } from '../../../utilities'

export default function checkForWinEpic (action$, store) {
  return action$.ofType(SQUARE_CLICKED).mergeMap(({ payload }) => {
    const square = payload.square
    const moves = getMoves(store.getState())
    const isPlayed = checkIfPlayed(square, moves)
    const minesTouching = getMinesTouching(square, mines)
    const squaresTouching = getSquaresTouching(square)

    if (minesTouching > 0) {
      // do nothing - no other squares are revealed if the square that was clicked
      // on is touching any mines.
    }


    // if (isNonEmptyArray(wins)) {  // found at least one winning pattern!
    //   // game over! somebody won
    //   // return a wrapped gameOver action with the winning squares and the player
    // }

    // if (plays > 8) { // no more squares to play
    //   // game over! (it's a tie)
    //   // return a wrapped empty gameOver action to indicate a tie
    // }

    // do nothing (none of the above conditions met)
  })
}