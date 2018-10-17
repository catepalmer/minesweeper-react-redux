import { contains, reduce } from 'ramda'

export default function getMinesTouching (index, mines) {

  const squares = (index === 0) ? [1, 9, 10] :
                  (index === 8) ? [-1, 8, 9] :
                  (index === 72) ? [-9, -8, 1] :
                  (index === 80) ? [-10, -9, -1] :
                  (index < 8) ? [-1, 1, 8, 9, 10] :
                  (index % 9 === 0) ? [-9, -8, 1, 9, 10] :
                  (index > 72) ? [-10, -9, -8, -1, 1] :
                  (index % 9 === 8) ? [-10, -9, -1, 8, 9] : [-10, -9, -8, -1, 1, 8, 9, 10]
  
  return reduce((acc, val) => {
    (contains((index + val), mines)) ? acc++ : acc
      return acc
  }, 0, squares)
}