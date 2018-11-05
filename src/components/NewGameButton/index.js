import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  background: teal;
  color: white;
  font-family: 'Verdana', sans-serif;
  height: 100vh;
  width: 100vw;
`
StyledForm.displayName = 'StyledForm'

export default function NewGameButton ({ handleSubmit }) {
  
  return (
    <StyledForm onSubmit={handleSubmit}>
      New Game
      <input type="submit" value="Submit" />
    </StyledForm>
  )
}