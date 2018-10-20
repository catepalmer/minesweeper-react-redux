import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { Square } from '../../containers'

import { getMines, minesSet } from '../../state'
import { setMines } from '../../utilities'

function mapStateToProps(state) {
  const mines = getMines(state.mines)
  console.log(`From the mapStateToProps in App: mines: ${mines}`)

  return {
    mines
  }
}

// function mapDispatchToProps(dispatch) {
//   const mines = setMines()
//   console.log(`From the mapDispatchToProps in App: mines: ${mines}, minesSet: ${minesSet}`)
  
//     return {
//       handleMinesSet: () => dispatch(minesSet(mines))
//     }
//   }

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

function App () {
  const mines = setMines()
  console.log(`mines: ${mines}`)
  return (
    <StyledApp>
      <Board>
        {times(square => <Square
                         key={square}
                         index={square}
                         mines={mines}
                        //  onLoad={handleMinesSet()}
                         />, 81)}
      </Board>
    </StyledApp>
  )
}

export default connect(mapStateToProps, null)(App)