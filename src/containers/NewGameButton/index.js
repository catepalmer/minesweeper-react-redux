import { connect } from 'react-redux'

import NewGameButton from '../../components/NewGameButton'
import { getMines, minesSet } from '../../state'
import { setMines } from '../../utilities'

function mapStateToProps (state) {
  const mines = getMines(state)
  
  return { mines }
}

function mapDispatchToProps (dispatch) {
  const mines = setMines()
  console.log(`mines from mapDispatchToProps: ${mines}`)

  return {
    handleSubmit: () => dispatch(minesSet(mines))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton)