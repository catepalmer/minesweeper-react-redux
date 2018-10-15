import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

import { Board, Square } from '..'

const makeSquares = ({ numColumns, numRows }) => {
  times(
    idx => <Square key={idx} index={idx} />,
    numColums * numRows
  )
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

export default function App () {
  return (
    <StyledApp>
      <Board>
        {makeSquares()}
      </Board>
    </StyledApp>
  )
}