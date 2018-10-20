import { map } from 'ramda'
import getSquares from '../getSquares'

export default function getSquaresTouching (square) {
  const squares = getSquares(square)
  
  return map((val => val + square), squares)
}