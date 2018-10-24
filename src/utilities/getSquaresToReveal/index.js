import { concat, contains, find, forEach, append, uniq } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import getMinesTouching from '../getMinesTouching'
import getSquaresTouching from '../getSquaresTouching'

export default function getSquaresToReveal(index, mines, squaresToReveal = [], squaresTouching = []) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  const squaresToRevealNew = append(index, squaresToReveal)
  const squaresTouchingNew = squaresTouching
  const nextSquareTouching = find(not(forEach((x => x), squaresTouchingNew)))(squaresToRevealNew)

  if (isMine || isUndefined(nextSquareTouching)) return squaresToRevealNew
  if (minesTouching > 0) return getSquaresToReveal(nextSquareTouching, mines, squaresToRevealNew, squaresTouchingNew)
  
  squaresTouchingNew = uniq(concat(getSquaresTouching(index), squaresTouching))
  nextSquareTouching = find(not(forEach((x => x), squaresTouchingNew)))(squaresToRevealNew)

  return getSquaresToReveal(nextSquareTouching, mines, squaresToRevealNew, squaresTouchingNew)
}




// not(contains((forEach((square => square), squaresTouchingNew), squaresToRevealNew))

//   const nextSquareTouching = find(forEach((square => square), squaresToRevealNew))(squaresTouchingNew)


// var xs = [{a: 1}, {a: 2}, {a: 3}];
// R.find(R.propEq('a', 2))(xs); //=> {a: 2}
// R.find(R.propEq('a', 4))(xs); //=> undefined



// import { contains, forEach, append, uniq } from 'ramda'
// import { isUndefined } from 'ramda-adjunct'
// import getMinesTouching from '../getMinesTouching'
// import getSquaresTouching from '../getSquaresTouching'

// export default function getSquaresToReveal(index, mines, squaresToReveal = [], squaresTouching = []) {
//   const isMine = contains(index, mines)
//   const minesTouching = getMinesTouching(index, mines)
//   const squaresTouchingNew = uniq(append(getSquaresTouching(index), squaresTouching))
//   const squaresToRevealNew = append(index, squaresToReveal)

//   if (isMine || minesTouching > 0) return squaresToRevealNew

//   const nextSquareTouching = find(forEach((square => square), squaresTouchingNew))(squaresToRevealNew)

//   if(isUndefined(nextSquareTouching)) return squaresToRevealNew

//   return getSquaresToReveal(nextSquareTouching, mines, squaresToReveal)
// }



  
//     forEach((square => {
//       squares.push(square + index)
//       getSquaresToReveal((square + index), mines, squares)
//       return squares
//     }), squaresTouching)

// }


// find(forEach((square => square), squaresTouchingNew))(squaresToRevealNew)


// var xs = [{a: 1}, {a: 2}, {a: 3}];
// R.find(R.propEq('a', 2))(xs); //=> {a: 2}
// R.find(R.propEq('a', 4))(xs); //=> undefined


// function getMatchingSquare (squaresTouching, squaresToReveal) {
//     forEach((x => forEach((y => (x === y) ? x : null), squaresToReveal)), squaresTouching)
// }



// function getMatchingSquare (squaresTouching, squaresToReveal) {
//     forEach((x => forEach((y => (x === y) ? x : null), squaresToReveal)), squaresTouching)
// }


// function getMatchingSquare (squaresTouching, squaresToReveal) {
//     forEach((square => {
//         forEach((sq => {
//             (square === sq) ? square : null
//         }), squaresToReveal)
//     }), squaresTouching)
// }



// function getMatch (squaresTouching, squaresToReveal) {
//     for (var i = 0; i < squaresTouching.length; i++) {
//         for (var j = 0; j < squaresToReveal.length; j++) {
//             (squaresToReveal[j] === squaresTouching[i]) ? squaresTouching[i] : null
//             }
//     }
// }






// import { contains, forEach, prepend } from 'ramda'
// import getMinesTouching from '../getMinesTouching'
// import getSquares from '../getSquares'

// export default function getSquaresToReveal(index, mines, squaresToReveal = []) {
//   const isMine = contains(index, mines)
//   const minesTouching = getMinesTouching(index, mines)
//   const squares = getSquares(index)

//   if (minesTouching === 0 && isMine === false) {
//     forEach((square => {
//       squaresToReveal.push(square + index)
//       getSquaresToReveal((square + index), mines, squaresToReveal)
//       return squaresToReveal
//     }), squares)
//   }

//   return prepend(index, squaresToReveal)
// }
