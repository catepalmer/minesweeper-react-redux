import { contains, reduce } from 'ramda'

export const getSquares = (square) => (square === 0) ? [1, 9, 10] :
                                      (square === 8) ? [-1, 8, 9] :
                                      (square === 72) ? [-9, -8, 1] :
                                      (square === 80) ? [-10, -9, -1] :
                                      (square < 8) ? [-1, 1, 8, 9, 10] :
                                      (square % 9 === 0) ? [-9, -8, 1, 9, 10] :
                                      (square > 72) ? [-10, -9, -8, -1, 1] :
                                      (square % 9 === 8) ? [-10, -9, -1, 8, 9] : [-10, -9, -8, -1, 1, 8, 9, 10]

export function getMinesTouching (square, mines) {
  const squares = getSquares(square)
  
  return reduce((acc, val) => {
    (contains((square + val), mines)) ? acc++ : acc
      return acc
  }, 0, squares)
}