import { append, equals, forEach, sort } from 'ramda'

export default function checkIfAllMinesFlagged (mines, { isFlagged }) {
  const sortedMines = sort(((a, b) => a - b), mines)
  const sortedFlags = []

  forEach(((val, i) => {
    if (val) append(i, sortedFlags)
  }), isFlagged)

  return equals(sortedMines, sortedFlags)
}