import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { filter, forEach, not } from 'ramda'

import { getMoves, SQUARE_CLICKED, squareClicked } from '../..'
import { checkIfPlayed, getMinesTouching, getSquaresTouching } from '../../../utilities'

export default function checkForBlankEpic (action$, store) {
  return action$.ofType(SQUARE_CLICKED).mergeMap(({ payload }) => {
    const square = payload.square
    const minesTouching = getMinesTouching(square, mines)

    if (minesTouching > 0) {
        return Observable.of()
    }

    const moves = getMoves(store.getState())
    const squaresToReveal = filter((x => not(checkIfPlayed(x, moves)), getSquaresTouching(square)))

    forEach((x => {
        return Observable.of(squareClicked(x))
    }), squaresToReveal)
  })
}
