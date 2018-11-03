import { indexOf } from 'ramda'

export default function checkIfFlagged (square, flags = []) {
  const flag = indexOf(square, flags)

  return (flag > -1)
}