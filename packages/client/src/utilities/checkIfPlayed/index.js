import { indexOf } from 'ramda'

export default function checkIfPlayed (square, moves = []) {
  const move = indexOf(square, moves)

  return (move > -1)
}