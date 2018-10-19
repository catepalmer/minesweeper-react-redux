import { connect } from 'react-redux'
import { contains } from 'ramda'

import Square from '../../components/Square'
import { getMines, getMoves, squareClicked } from '../../state'
import { checkIfPlayed, getMinesTouching } from '../../utilities'

function mapStateToProps (state, { index }) {
    console.log(`From containers/Square: state.mines: ${state.mines}`)

  const moves = getMoves(state)
  const mines = getMines(state)

  console.log(`From containers/Square: moves: ${moves}, mines: ${mines}, index: ${index}`)

  return {
    isMine: contains(index, mines),
    isPlayed: checkIfPlayed(index, moves),
    minesTouching: getMinesTouching(index, mines)
  }
}

function mapDispatchToProps (dispatch, { index }) {
  return {
    handleClick: () => dispatch(squareClicked(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)