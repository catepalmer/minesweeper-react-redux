import { contains, reduce } from 'ramda'

// export default function getMinesTouching (idx, mines) {
//   const checkSquares = [-10, -9, -8, -1, 1, 8, 9, 10]

//   return checkSquares.reduce((acc, val) => {
//     (contains((idx + val), mines)) ? acc++ : acc
//     return acc
//   }, 0)
// }



export default function getMinesTouching (idx, mines) {

  return reduce((acc, val) => {
    (contains((idx + val), mines)) ? acc++ : acc
      return acc
  }, 0, [-10, -9, -8, -1, 1, 8, 9, 10])
}

