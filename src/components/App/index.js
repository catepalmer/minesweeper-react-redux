import React from 'react'
import styled from 'styled-components'
import { contains, times } from 'ramda'

import { Board, Square } from '..'
import setMines from '../../utilities/setMines'
import { getMinesTouching } from '../../utilities/getMinesTouching'

const mines = setMines()

const makeSquares = (mines) =>
  times(
    idx => <Square key={idx} index={idx} isMine={contains(idx, mines) ? true : false}
                   minesTouching={contains(idx, mines) ? null : getMinesTouching(idx, mines)} />,
    81
  )

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
  return (
    <StyledApp>
      <Board>
        {makeSquares(mines)}
      </Board>
    </StyledApp>
  )
}