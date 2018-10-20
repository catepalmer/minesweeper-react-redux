export default function getSquares (square) {

  return (square === 0) ? [1, 9, 10] :
         (square === 8) ? [-1, 8, 9] :
         (square === 72) ? [-9, -8, 1] :
         (square === 80) ? [-10, -9, -1] :
         (square < 8) ? [-1, 1, 8, 9, 10] :
         (square % 9 === 0) ? [-9, -8, 1, 9, 10] :
         (square > 72) ? [-10, -9, -8, -1, 1] :
         (square % 9 === 8) ? [-10, -9, -1, 8, 9] : [-10, -9, -8, -1, 1, 8, 9, 10]
}