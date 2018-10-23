import React from 'react'
import styled from 'styled-components'
import { contains } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

// import flag from '../../images/flag.png'
import mine from '../../images/mine.png'

import { getMinesTouching } from '../../utilities'

const StyledImage = styled.img`
  height: 5vh;
  width: 5vh;
  margin: auto;
  margin-top: 0.5vh;
`

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 0%, 0.2);
  border-style: solid;
  border-width: 2px;
  color: ${({ isMine, minesTouching }) => (isMine ? '' : ['#2939BD', '#307944', '#B52435', '#09114C', '#5E2123', '#306664', '#1A1A1A', '#757575'][minesTouching - 1])};
  cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')};
  font-size: 4vh;
  font-weight: bold;
  line-height: 7vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square ({ handleClick, index, isPlayed, mines }) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)

  return isPlayed
    ? <StyledSquare index={index} isMine={isMine} isPlayed={isPlayed} minesTouching={minesTouching}>
        {isMine ? <StyledImage src={mine}></StyledImage>
                : (minesTouching === 0) ? '' : minesTouching}
      </StyledSquare>
    : <StyledSquare index={index} isPlayed={isPlayed} onClick={handleClick} />
}