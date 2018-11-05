import React from 'react'
import styled from 'styled-components'
import { contains } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import flag from '../../images/flag.png'
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
  background-color: ${({ isLosingSquare, minesTouching }) => isLosingSquare ? '#CC0000'
                                                                            : (minesTouching === 0) ? '#EEEEEE' : ''};
  color: ${({ minesTouching }) => ['#2939BD', '#307944', '#B52435', '#09114C', '#5E2123', '#306664', '#1A1A1A', '#757575'][minesTouching - 1]};
`
SquarePlayed.defaultName = 'SquarePlayed'

const SquarePlayable = StyledSquare.extend`
  cursor: pointer;
`
SquarePlayable.defaultName = 'SquarePlayable'


export default function Square ({
  gameIsWon,
  handleClick,
  handleMineClick,
  handleRightClick,
  index,
  isFlagged,
  isLosingSquare,
  losingSquare,
  isPlayed,
  mines
}) {
  const isMine = contains(index, mines)
  const minesTouching = getMinesTouching(index, mines)
  console.log(`isFlagged for square ${index}: ${isFlagged[index]}, gameIsWon: ${gameIsWon}`)

  if (isFlagged[index])
    return <StyledSquare index={index} mines={mines} onContextMenu={handleRightClick}>
             <StyledImage src={flag}></StyledImage>
           </StyledSquare>

  if (isUndefined(losingSquare)) {
    return gameIsWon ? isMine ? <SquarePlayed index={index}/>
                              : <SquarePlayed index={index} minesTouching={minesTouching} >
                                  {(minesTouching === 0) ? ''
                                                         : minesTouching}
                                </SquarePlayed>
                     : isPlayed ? <SquarePlayed index={index} mines={mines} minesTouching={minesTouching} >
                                    {(minesTouching === 0) ? ''
                                                           : minesTouching}
                                  </SquarePlayed>
                                : isMine ? <SquarePlayable index={index} mines={mines} onClick={handleMineClick} onContextMenu={handleRightClick} />
                                         : <SquarePlayable index={index} mines={mines} onClick={handleClick} onContextMenu={handleRightClick} />
  }

  return isMine
    ? <SquarePlayed index={index} isLosingSquare={isLosingSquare} >
        <StyledImage src={mine}></StyledImage>
      </SquarePlayed>
    : isPlayed ? <SquarePlayed index={index} minesTouching={minesTouching} >
                   {(minesTouching === 0) ? ''
                                          : minesTouching}
                 </SquarePlayed>
               : <StyledSquare index={index} />
}