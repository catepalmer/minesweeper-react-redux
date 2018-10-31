import { connect } from 'react-redux'
import { isNotEmpty } from 'ramda-adjunct'

import Square from '../../components/Square'
import { getLosingSquare, getMoves, mineClicked, squareClicked } from '../../state'
import { checkIfLosingSquare, checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)
  const gameIsLost = isNotEmpty(losingSquare)
  const isLosingSquare = checkIfLosingSquare(state)
  const losingSquare = getLosingSquare(state)

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