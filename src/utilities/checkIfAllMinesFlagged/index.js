import { equals, sort } from 'ramda'

export default function checkIfAllMinesFlagged (mines, { flags }) {
  const sortedMines = sort(((a, b) => a - b), mines)
  const sortedFlags = sort(((a, b) => a - b), flags)

  return equals(sortedMines, sortedFlags)
}