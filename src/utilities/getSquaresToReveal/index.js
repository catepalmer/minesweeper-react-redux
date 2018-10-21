import { contains, forEach } from 'ramda'
import getMinesTouching from '../getMinesTouching'
import getSquares from '../getSquares'

export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  const squares = getSquares(index)

  (isMine || (minesTouching > 0)) ? squaresToReveal.push(index)
                                  : squaresToReveal.push(index)
                                    forEach((square => {
                                      squaresToReveal.push(square)
                                      getSquaresToReveal(square, mines, squaresToReveal)
                                    }), squares)

  return squaresToReveal
}
