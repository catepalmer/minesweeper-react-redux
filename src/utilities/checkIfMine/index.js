import { contains } from 'ramda'

export default function checkIfMine(index, mines) {
  return contains(index, mines)
}

