import { filter, find, map } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import getSquares from '../getSquares'

export default function getSquaresTouching (index, squaresToReveal) {
  const squares = getSquares(index)
                  
  return filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), squares)))
}