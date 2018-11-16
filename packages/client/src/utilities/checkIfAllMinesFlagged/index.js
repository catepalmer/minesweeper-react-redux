import { equals, sort } from 'ramda'

export default function checkIfAllMinesFlagged (mines, isFlagged) {
  const sortedMines = sort(((a, b) => a - b), mines)
  const sortedFlags = []

   for (let i = 0; i < isFlagged.length; i++) {
    if (isFlagged[i]) sortedFlags.push(i)
  }

  return equals(sortedMines, sortedFlags)
}

