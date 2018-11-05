import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board } from '..'
import { NewGameButton, Square } from '../../containers'

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

export default function App ({ mines }) {
  console.log(`mines: ${mines}`)
  
  return (
    <StyledApp mines={mines}>
      <Board>
        {times(square => <Square key={square} index={square} />, 81)}
      </Board>
      <NewGameButton />
    </StyledApp>
  )
}