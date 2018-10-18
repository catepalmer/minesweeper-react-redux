import { contains, reduce } from 'ramda'

export const getSquares = (idx) => (idx === 0) ? [1, 9, 10] :
                                   (idx === 8) ? [-1, 8, 9] :
                                   (idx === 72) ? [-9, -8, 1] :
                                   (idx === 80) ? [-10, -9, -1] :
                                   (idx < 8) ? [-1, 1, 8, 9, 10] :
                                   (idx % 9 === 0) ? [-9, -8, 1, 9, 10] :
                                   (idx > 72) ? [-10, -9, -8, -1, 1] :
                                   (idx % 9 === 8) ? [-10, -9, -1, 8, 9] : [-10, -9, -8, -1, 1, 8, 9, 10]

export function getMinesTouching (idx, mines) {
  const squares = getSquares(idx)
  
  return reduce((acc, val) => {
    (contains((idx + val), mines)) ? acc++ : acc
      return acc
  }, 0, squares)
}
