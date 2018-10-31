import { connect } from 'react-redux'
import { not } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import Square from '../../components/Square'
import { getLosingSquare, getMoves, mineClicked, squareClicked } from '../../state'
import { checkIfLosingSquare, checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const losingSquare = getLosingSquare(state)
  const isLosingSquare = checkIfLosingSquare(index, state)
  const gameIsLost = not(isUndefined(losingSquare))

  return gameIsLost
    ? { isLosingSquare, losingSquare, isPlayed: checkIfPlayed(index, moves) }
    : { isPlayed: checkIfPlayed(index, moves) }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index)),
    handleMineClick: () => dispatch(mineClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)