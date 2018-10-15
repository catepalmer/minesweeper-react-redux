import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  border-color: hsla(0, 0%, 48%, 1);
  border-style: solid;
  border-width: 2px;
  color: ${({isTouching}) => ((isTouching === 1) ? 'hsla(82, 56%, 15%, 1)' :
                              (isTouching === 2) ? 'hsla(92, 89%, 24%, 1)' :
                              (isTouching === 3) ? 'hsla(354, 76%, 42%, 1)' :
                              (isTouching === 4) ? 'hsla(77, 44%, 6%, 1)' :
                              (isTouching === 5) ? 'hsla(18, 95%, 22%, 1)' :
                              (isTouching === 6) ? 'hsla(104, 83%, 23%, 1)' :
                              (isTouching === 7) ? 'hsla(60, 86%, 5%, 1)' : 'hsla(60, 82%, 29%, 1)')};
  font-size: 3vh;
  font-weight: bold;
  line-height: 3.5vh;
  text-align: center;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square (props) {
  return (
    <StyledSquare index={props.index} isHidden={props.isHidden} isMarked={props.isMarked} isMine={props.isMine} isTouching={thisSquare.isTouching}>
      
    </StyledSquare>
  )
}