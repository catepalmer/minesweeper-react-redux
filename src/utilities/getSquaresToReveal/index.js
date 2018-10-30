import { append, contains, forEach, length, uniq } from 'ramda'
import getMinesTouching from '../getMinesTouching'
import getSquaresTouching from '../getSquaresTouching'

export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  squaresToReveal = append(index, squaresToReveal)

  if (isMine || minesTouching > 0) return squaresToReveal

  let squaresTouching = getSquaresTouching(index)

  forEach((a => {
    squaresToReveal = append(a, squaresToReveal)
    if (getMinesTouching(a, mines) === 0) {
      let squaresTouching2 = getSquaresTouching(a)
      forEach((b => {
        squaresToReveal = append(b, squaresToReveal)
        if (getMinesTouching(b, mines) === 0) {
          let squaresTouching3 = getSquaresTouching(b)
          forEach((c => {
            squaresToReveal = append(c, squaresToReveal)
            if (getMinesTouching(c, mines) === 0) {
              let squaresTouching4 = getSquaresTouching(c)
              forEach((d => {
                squaresToReveal = append(d, squaresToReveal)
                if (getMinesTouching(d, mines) === 0) {
                  let squaresTouching5 = getSquaresTouching(d)
                  forEach((e => {
                    squaresToReveal = append(e, squaresToReveal)
                    if (getMinesTouching(e, mines) === 0) {
                      let squaresTouching6 = getSquaresTouching(e)
                      forEach((f => {
                        squaresToReveal = append(f, squaresToReveal)
                        if (getMinesTouching(f, mines) === 0) {
                          let squaresTouching7 = getSquaresTouching(f)
                          forEach ((g => {
                            squaresToReveal = append(g, squaresToReveal)
                          }), squaresTouching7)
                        }
                      }), squaresTouching6)
                    }
                  }), squaresTouching5)
                }
              }), squaresTouching4)
            }
          }), squaresTouching3)
        }
      }), squaresTouching2)
    }
  }), squaresTouching)

  return length(uniq(squaresToReveal))
}





// import { append, concat, contains, forEach, length, not, uniq } from 'ramda'
// import getMinesTouching from '../getMinesTouching'
// import getSquaresTouching from '../getSquaresTouching'

// export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
//   const isMine = contains(index, mines)
//   const minesTouching = getMinesTouching(index, mines)
//   squaresToReveal = append(index, squaresToReveal)

//   if (isMine || minesTouching > 0) return squaresToReveal

//   let squaresTouching = getSquaresTouching(index)

//   for (let i = 0; i < squaresTouching.length; i++) {
//     squaresToReveal = append(squaresTouching[i], squaresToReveal)
//     if (getMinesTouching(squaresTouching[i], mines) === 0) {
//       let squaresTouching2 = getSquaresTouching(squaresTouching[i])
//       for (let j = 0; j < squaresTouching2.length; j++) {
//         squaresToReveal = append(squaresTouching2[j], squaresToReveal)
//         if (getMinesTouching(squaresTouching2[j], mines) === 0) {
//           let squaresTouching3 = getSquaresTouching(squaresTouching2[j])
//           for (let k = 0; k < squaresTouching3.length; k++) {
//             squaresToReveal = append(squaresTouching3[k], squaresToReveal)
//             if (getMinesTouching(squaresTouching3[k], mines) === 0) {
//               let squaresTouching4 = getSquaresTouching(squaresTouching3[k])
//               for (let l = 0; l < squaresTouching4.length; l++) {
//                 squaresToReveal = append(squaresTouching4[l], squaresToReveal)
//                 if (getMinesTouching(squaresTouching4[l], mines) === 0) {
//                   let squaresTouching5 = getSquaresTouching(squaresTouching4[l])
//                   for (let m = 0; m < squaresTouching5.length; m++) {
//                     squaresToReveal = append(squaresTouching5[m], squaresToReveal)
//                     if (getMinesTouching(squaresTouching5[m], mines) === 0) {
//                       let squaresTouching6 = getSquaresTouching(squaresTouching5[m])
//                       for (let n = 0; n < squaresTouching6.length; n++) {
//                         squaresToReveal = append(squaresTouching6[n], squaresToReveal)
//                         if (getMinesTouching(squaresTouching6[n], mines) === 0) {
//                           let squaresTouching7 = getSquaresTouching(squaresTouching6[n])
//                           for (let o = 0; o < squaresTouching7.length; o++) {
//                             squaresToReveal = append(squaresTouching7[o], squaresToReveal)
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return length(uniq(squaresToReveal))
// }






  // function getSquaresToReveal(index, mines, squaresToReveal = [], squaresTouching = []) {
  //   const isMine = contains(index, mines)
  //   let minesTouching = getMinesTouching(index, mines)
  //   squaresToReveal = append(index, [...squaresToReveal])
  //   let squaresNotRevealed = []

  //   if (isMine) return squaresToReveal
  //   if (minesTouching === 0) squaresTouching = uniq(concat(getSquaresTouching(index), [...squaresTouching]))

  //   forEach((square => {
  //     if (not(contains(square, [squaresToReveal]))) {
  //       squaresNotRevealed = append(square, squaresNotRevealed)
  //     }
  //   }), squaresTouching)

  //   if (length(squaresNotRevealed) === 0) return squaresToReveal

  //   return getSquaresToReveal(squaresNotRevealed[0], mines, squaresToReveal, squaresTouching)
  // }

