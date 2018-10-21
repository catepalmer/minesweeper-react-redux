import { contains, forEach, prepend } from 'ramda'
import getMinesTouching from '../getMinesTouching'
import getSquares from '../getSquares'

export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  const squares = getSquares(index)

  if (minesTouching === 0 && isMine === false) {
    forEach((square => {
      squaresToReveal.push(square)
      getSquaresToReveal(square, mines, squaresToReveal)
      return squaresToReveal
    }), squares)
  }

  return prepend(index, squaresToReveal)
}