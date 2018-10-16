import React from 'react'
import styled from 'styled-components'
import { contains, length, not, times } from 'ramda'

import { Board, Square } from '..'

const makeMines = (mines = [], idx = Math.floor(Math.random() * 81)) => {
  if (length(mines) === 10) return mines
  if (not(contains(idx, mines))) mines.push(idx)
  return makeMines(mines)
}

const mines = makeMines()
  
const isMine = (idx, mines) => {
  return (contains(idx, mines)) ? true : false
}

const makeSquares = () =>
  times(
    idx => <Square key={idx} index={idx} isMine={isMine(idx, mines)} />,
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
        {makeSquares()}
      </Board>
    </StyledApp>
  )
}