import { connect } from 'react-redux'
import { equals, filter, find, identity, isNil, not, sort, times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import Square from '../../components/Square'
import { getLosingSquare, getMoves, mineClicked, squareClicked } from '../../state'
import { checkIfLosingSquare, checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index, mines }) {
  const moves = getMoves(state)
  const nonMines = filter((x => isNil(find(equals(x))(mines))), times(identity, 81))
  const losingSquare = getLosingSquare(state)
  const isLosingSquare = checkIfLosingSquare(index, state)
  const gameIsLost = not(isUndefined(losingSquare))
  const gameIsWon = equals(sort(((a, b) => a - b), moves), nonMines)

  return gameIsLost
    ? { isLosingSquare, losingSquare, isPlayed: checkIfPlayed(index, moves) }
    : gameIsWon ? { gameIsWon }
                : { isPlayed: checkIfPlayed(index, moves) }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index)),
    handleMineClick: () => dispatch(mineClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)