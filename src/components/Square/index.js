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
  cursor: default;
  font-size: 4vh;
  font-weight: bold;
  line-height: 7vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.defaultName = 'StyledSquare'

const SquarePlayed = StyledSquare.extend`
  background-color: ${({ isMine, isPlayed, minesTouching }) => (isMine === false && isPlayed && minesTouching === 0) ? '#F3E6FF' : ''};
  color: ${({ isMine, minesTouching }) => (isMine ? '' : ['#2939BD', '#307944', '#B52435', '#09114C', '#5E2123', '#306664', '#1A1A1A', '#757575'][minesTouching - 1])};
`
SquarePlayed.defaultName = 'SquarePlayed'

const SquareLost = StyledSquare.extend`
  background-color: 'red';
`
SquareLost.defaultName = 'SquareLost'

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`
SquarePlayable.defaultName = 'SquarePlayable'

export default function Square ({
  handleClick,
  handleMineClick,
  index,
  isLosingSquare,
  isPlayed,
  mines
}) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)

  if (isUndefined(isLosingSquare)) {
    return isPlayed
      ? <SquarePlayed index={index} isMine={isMine} isPlayed={isPlayed} minesTouching={minesTouching} >
          {isMine ? <StyledImage src={mine}></StyledImage>
                  : (minesTouching === 0) ? '' : minesTouching}
        </SquarePlayed>
      : isMine ? <SquarePlayable index={index} isPlayed={isPlayed} onClick={handleMineClick} />
               : <SquarePlayable index={index} isPlayed={isPlayed} onClick={handleClick} />
  }

  return isLosingSquare
    ? <SquareLost index={index}>
        <StyledImage src={mine}></StyledImage>
      </SquareLost>
    : isPlayed ? <SquarePlayed index={index} isMine={isMine} isPlayed={isPlayed} minesTouching={minesTouching} >
                   {isMine ? <StyledImage src={mine}></StyledImage>
                           : (minesTouching === 0) ? '' : minesTouching}
                 </SquarePlayed>
               : <StyledSquare index={index} />
}