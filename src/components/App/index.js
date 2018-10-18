import React from 'react'
import styled from 'styled-components'
import { contains, times } from 'ramda'

import { Board, Square } from '..'
import { checkIfPlayed, getMinesTouching, setMines } from '../../utilities'

const mines = setMines()

function makeSquares (mines, moves) {
  return times(square => {
    const isPlayed = checkIfPlayed(square, moves)

    return (isPlayed === false)
      ? <Square
        key={square}
        handleClick={() => console.log(`Square ${square}`)}
        index={square}
        />
        : <Square
        key={square}
        index={square}
        isMine={contains(square, mines) ? true : false}
        minesTouching={contains(square, mines) ? null : getMinesTouching(square, mines)}
        />
  }, 81)
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

export default function App ({ moves = [] }) {
  return (
    <StyledApp>
      <Board>
        {makeSquares(mines, moves)}
      </Board>
    </StyledApp>
  )
}