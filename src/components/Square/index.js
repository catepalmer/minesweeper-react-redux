import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 2px;
  color: gray;
  font-size: 4vh;
  font-weight: bold;
  line-height: 7vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square ({ index, isMine }) {
  return (
    <StyledSquare index={index} isMine={isMine}>
      {isMine ? 'X' : 'O'}
    </StyledSquare>
  )
}