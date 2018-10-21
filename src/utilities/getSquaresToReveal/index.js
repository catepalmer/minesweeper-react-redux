import { contains, filter, find, forEach, map, prepend } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import getMinesTouching from '../getMinesTouching'
import getSquares from '../getSquares'

export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  const isNotRevealed = isUndefined(find(index)(squaresToReveal))
  const squaresTouching = filter(isNotRevealed, map((square => square + index), getSquares(index)))


  console.log(`From the getSquaresTouching utility function: isMine: ${isMine}, minesTouching: ${minesTouching}, isNotRevealed: ${isNotRevealed}, squaresTouching: ${squaresTouching}`)
  console.log(`From the getSquaresTouching utility function: index: ${index}, mines: ${mines}, squaresToReveal: ${squaresToReveal}`)
  if (minesTouching === 0 && isMine === false) {
    forEach((square => {
      squaresToReveal.push(square)
      // getSquaresToReveal(square, mines, squaresToReveal)
      return squaresToReveal
    }), squaresTouching)
  }
  return prepend(index, squaresToReveal)
}