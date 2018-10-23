import { connect } from 'react-redux'
import { forEach } from 'ramda'

import Square from '../../components/Square'
import { getMoves, squareClicked } from '../../state'
import { checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)

  return {
    isPlayed: checkIfPlayed(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index, squaresTouching }) {
  return {
    handleClick: () => dispatch(squareClicked(index)),
    handleClickBlank: () => forEach((square => dispatch(squareClicked(square))), squaresTouching)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)