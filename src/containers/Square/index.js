import { connect } from 'react-redux'
import { contains } from 'ramda'

import Square from '../../components/Square'
import { getMoves, squareClicked } from '../../state'
import { checkIfPlayed } from '../../utilities'

function mapStateToProps (state, { index }) {
  const moves = getMoves(state.moves)

  return {
    isPlayed: checkIfPlayed(index, moves)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)