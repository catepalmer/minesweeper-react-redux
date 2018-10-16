import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 2px;
  color: ${({ isMine }) => (isMine ? 'red' : 'black')};
  cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')};
  font-size: 4vh;
  font-weight: bold;
  line-height: 7vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square ({ handleClick, index, isMine }) {
  return (
    <StyledSquare index={index} isMine={isMine} onClick={handleClick}>
      {isMine ? 'X' : 'O'}
    </StyledSquare>
  )
}