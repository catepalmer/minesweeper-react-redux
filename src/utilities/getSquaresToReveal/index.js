import { contains, filter, find, forEach, map, prepend } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import getMinesTouching from '../getMinesTouching'
import getSquares from '../getSquares'

export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  const squaresTouching = filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), getSquares(index))))
  
  const allSquaresTouching = await forEach((square => {
      squaresToReveal.push(square)
      getSquaresToReveal(square, mines, squaresToReveal)
      return squaresToReveal
    }), squaresTouching)

  const getAllSquaresTouching = async function () {
    return allSquaresTouching
  }
  
  if (minesTouching === 0 && isMine === false) {
    getAllSquaresTouching()
  }
  return squaresToReveal
}