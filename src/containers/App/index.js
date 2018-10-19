import { connect } from 'react-redux'

import App from '../../components/App'
import { minesSet } from '../../state'
import { setMines } from '../../utilities'

function mapStateToProps({ mines }) {
  console.log(`From mapStateToProps in App container: mines: ${mines}`)

  return {
    mines
  }
}

function mapDispatchToProps(dispatch) {
const mines = setMines()
  console.log(`From mapDispatchToProps in App container: mines: ${mines}`)

  return {
    minesSet: () => dispatch(minesSet(mines))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)