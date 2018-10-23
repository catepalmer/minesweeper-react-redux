import { contains, reduce } from 'ramda'
import getSquaresTouching from '../getSquaresTouching'

export default function getMinesTouching (square, mines) {
  const squares = getSquaresTouching(square)
  
  return reduce((acc, val) => {
    (contains(val, mines)) ? acc++ : acc
      return acc
  }, 0, squares)
}