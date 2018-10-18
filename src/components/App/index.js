import React from 'react'
import styled from 'styled-components'
import { contains, times } from 'ramda'

import { Board } from '..'
import { Square } from '../../containers'
import { getMinesTouching, setMines } from '../../utilities'

const mines = setMines()

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

export function App ({ markSquare, moves }) {
  return (
    <StyledApp>
      <Board>
        {times(square => <Square
                         key={square}
                         index={square}
                         isMine={contains(square, mines) ? true : false}
                         minesTouching={contains(square, mines) ? null : getMinesTouching(square, mines)}
                         />, 81)}
      </Board>
    </StyledApp>
  )
}