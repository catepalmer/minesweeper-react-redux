import { connect } from 'react-redux'
import { equals, filter, find, identity, isNil, not, sort, times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import Square from '../../components/Square'
import { getLosingSquare, getFlags, getMoves, mineClicked, squareClicked, squareRightClicked } from '../../state'
import { checkIfAllMinesFlagged, checkIfLosingSquare, checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index, mines }) {
  const moves = getMoves(state)
  const nonMines = filter((x => isNil(find(equals(x))(mines))), times(identity, 81))
  const flags = getFlags(state)
  const allMinesFlagged = checkIfAllMinesFlagged(mines, state)
  const losingSquare = getLosingSquare(state)
  const isLosingSquare = checkIfLosingSquare(index, state)
  const gameIsLost = not(isUndefined(losingSquare))
  const gameIsWon = (equals(sort(((a, b) => a - b), moves), nonMines) && allMinesFlagged)

  return gameIsLost
    ? { isLosingSquare, losingSquare, flags, isPlayed: checkIfPlayed(index, moves) }
    : gameIsWon ? { gameIsWon, flags }
                : { isPlayed: checkIfPlayed(index, moves), flags }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index)),
    handleMineClick: () => dispatch(mineClicked(index)),
    handleRightClick: () => dispatch(squareRightClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)