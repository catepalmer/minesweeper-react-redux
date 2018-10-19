import { connect } from 'react-redux'

import App from '../../components/App'
import { minesSet } from '../../state'
import { setMines } from '../../utilities'

const mines = setMines()

function mapDispatchToProps(dispatch) {

  return {
    mines: () => dispatch(minesSet(mines))
  }
}

export default connect(null, mapDispatchToProps)(App)