import React from 'react'
import styled from 'styled-components'

const StyledStartButton = styled.button`
  align-self: center;
  background: 'gray';
  color: 'black';
  font-size: 6vh;
  margin: auto;
  border: 2px solid black;
  border-radius: 1vh;
  width: 40vh;
`

StyledStartButton.displayName = 'StyledStartButton'

export default function StartButton({ handleMinesSet }) {
  return <StyledStartButton>
    <form>
      <input onSumbit={handleMinesSet}>START GAME</input>
    </form>
  </StyledStartButton>
}