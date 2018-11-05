import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  font-family: 'Verdana', sans-serif;
  height: 50vh;
  width: 50vw;
`
StyledForm.displayName = 'StyledForm'

export default function NewGameButton ({ handleSubmit }) {
  
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="submit" value="New Game" />
    </StyledForm>
  )
}