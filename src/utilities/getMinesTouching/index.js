import { contains, reduce } from 'ramda'
import getSquares from '../getSquares'

export default function getMinesTouching (square, mines) {
  const squares = getSquares(square)
  
  return reduce((acc, val) => {
    (contains((square + val), mines)) ? acc++ : acc
      return acc
  }, 0, squares)
}