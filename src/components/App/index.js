import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { Square } from '../../containers'

import { getMines, minesSet } from '../../state'
import { setMines } from '../../utilities'

function mapStateToProps(state) {
  const mines = getMines(state)
  console.log(`From mapStateToProps in App container: mines: ${mines}`)

  return {
    mines
  }
}

function mapDispatchToProps(dispatch) {
  const mines = setMines()
    console.log(`From mapDispatchToProps in App container: mines: ${mines}`)
  
    return {
      handleMinesSet: () => dispatch(minesSet(mines))
    }
  }

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.displayName = 'StyledApp'

function App ({ handleMinesSet }) {
  console.log(`From App component: minesSet: ${handleMinesSet}`)
  return (
    <StyledApp>
      <Board>
        {times(square => <Square
                         key={square}
                         index={square}
                         onLoad={handleMinesSet}
                         />, 81)}
      </Board>
    </StyledApp>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)