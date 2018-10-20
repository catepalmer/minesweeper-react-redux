import { connect } from 'react-redux'

import Square from '../../components/Square'
import { blankSquareClicked, getMoves, squareClicked } from '../../state'
import { checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state)

  return {
    isPlayed: checkIfPlayed(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index)),
    handleClickBlank: () => dispatch(blankSquareClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)