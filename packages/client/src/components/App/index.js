import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { NewGameButton, Square } from '../../containers'

import { setMines } from '../../utilities'

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

export default function App () {
  const mines = setMines()
  console.log(`mines from App component: ${mines}`)
  
  return (
    <StyledApp mines={mines}>
      <Board>
        {times(square => <Square key={square} index={square} mine={mines} />, 81)}
      </Board>
      <NewGameButton mines={mines} />
    </StyledApp>
  )
}