import { connect } from 'react-redux'

import NewGameButton from '../../components/NewGameButton'
import { getMines, minesSet } from '../../state'
import { setMines } from '../../utilities'

function mapStateToProps (state) {
  const mines = getMines(state)
  console.log(`mines from mapStateToProps: ${mines}`)
  
  return { mines }
}

function mapDispatchToProps (dispatch, { mines }) {
  console.log(`mines from mapDispatchToProps: ${mines}`)

  return {
    handleSubmit: () => dispatch(minesSet(mines))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton)