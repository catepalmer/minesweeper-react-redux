import { connect } from 'react-redux'
// import { forEach } from 'ramda'

import Square from '../../components/Square'
import { getMoves, squareClicked } from '../../state'
import { checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)

  return {
    isPlayed: checkIfPlayed(index, moves)
  }
}

function mapDispatchToProps (dispatch, { squaresToReveal }) {
  return {
    handleClick: () => dispatch(squareClicked(squaresToReveal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)



// handleClickBlank: () => forEach((square => dispatch(squareClicked(square))), squaresTouching)