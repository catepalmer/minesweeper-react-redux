import { append, forEach } from 'ramda'
import getMinesTouching from '../getMinesTouching'
import getSquaresTouching from '../getSquaresTouching'

export default function getSquaresToReveal(index, mines, squares = []) {
  const minesTouching = getMinesTouching(index, mines)
  const squaresTouching = getSquaresTouching(index, squares)
  const squaresToReveal = append(index, squares)

  if (minesTouching === 0) {
    forEach((square => {
      getSquaresToReveal(square, mines, squaresToReveal)
    }), squaresTouching)
  }

  return squaresToReveal
}





  // export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  //   const isMine = contains(index, mines)
  //   const minesTouching = getMinesTouching(index, mines)

  //   console.log(`index1: ${index}, squaresToReveal1: ${squaresToReveal}`)

  //   if (minesTouching === 0 && isMine === false) {
  //     const squaresTouching = filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), getSquares(index))))

  //     forEach((square => {
  //       squaresToReveal.push(square)
  //       console.log(`index2: ${index}, squaresToReveal2: ${squaresToReveal}`)
  //       // getSquaresToReveal(square, mines, squaresToReveal)
  //       }), squaresTouching)
  //     }
  //     return prepend(index, squaresToReveal)
  //   }






//     return async () => {
//       const allSquares = await forEach((square => {
//         squaresToReveal.push(square)
//         console.log(`index2: ${index}, squaresToReveal2: ${squaresToReveal}`)
//         // getSquaresToReveal(square, mines, squaresToReveal)
//         return squaresToReveal
//       }), squaresTouching)
//       return allSquares
//     }
//   }
//   console.log(`index3: ${index}, squaresToReveal3: ${squaresToReveal}`)

//   return prepend(index, squaresToReveal)
// }








// // export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
// //   const isMine = contains(index, mines)
// //   const minesTouching = getMinesTouching(index, mines)

// //   console.log(`index1: ${index}, squaresToReveal1: ${squaresToReveal}`)

// //   if (minesTouching === 0 && isMine === false) {
// //     const squaresTouching = filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), getSquares(index))))

// //     return async () => {
// //       const allSquares = await forEach((square => {
// //         squaresToReveal.push(square)
// //         console.log(`index2: ${index}, squaresToReveal2: ${squaresToReveal}`)
// //         // getSquaresToReveal(square, mines, squaresToReveal)
// //         return squaresToReveal
// //       }), squaresTouching)
// //       return allSquares
// //     }
// //   }
// //   console.log(`index3: ${index}, squaresToReveal3: ${squaresToReveal}`)

// //   return prepend(index, squaresToReveal)
// // }





// // export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
// //   const isMine = contains(index, mines)
// //   const minesTouching = getMinesTouching(index, mines)

// //   console.log(`index1: ${index}, squaresToReveal1: ${squaresToReveal}`)

// //   if (minesTouching === 0 && isMine === false) {
// //     const squaresTouching = filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), getSquares(index))))
// //     const getAllSquaresTouching = async () => {
// //       const allSquaresTouching = await forEach((square => {
// //         squaresToReveal.push(square)
// //         // getSquaresToReveal(square, mines, squaresToReveal)
// //         return squaresToReveal
// //       }), squaresTouching)
// //       return allSquaresTouching
// //     }
// //     return getAllSquaresTouching()
// //   }
// //   console.log(`index2: ${index}, squaresToReveal2: ${squaresToReveal}`)

// //   return prepend(index, squaresToReveal)
// // }


// // export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
// //   const isMine = contains(index, mines)
// //   const minesTouching = getMinesTouching(index, mines)
// //   const squaresTouching = filter((square => isUndefined(find(square)(squaresToReveal))), (map((square => square + index), getSquares(index))))
// //   console.log(`squaresTouching: ${squaresTouching}, squaresToReveal: ${squaresToReveal}`)

// //   const getAllSquaresTouching = async function () {
// //     const allSquaresTouching = await forEach((square => {
// //       squaresToReveal.push(square)
// //       getSquaresToReveal(square, mines, squaresToReveal)
// //       return squaresToReveal
// //     }), squaresTouching)
// //     return allSquaresTouching
// //   }

// //   if (minesTouching === 0 && isMine === false) {
// //     console.log(`squaresTouching2: ${squaresTouching}, squaresToReveal2: ${squaresToReveal}`)
// //     getAllSquaresTouching()
// //   }
// //   return prepend(index, squaresToReveal)
// // }