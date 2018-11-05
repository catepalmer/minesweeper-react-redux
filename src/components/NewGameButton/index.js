import React from 'react'
import styled from 'styled-components'

// import { setMines } from '../../utilities'

const StyledForm = styled.form`
  font-family: 'Verdana', sans-serif;
  height: 50vh;
  width: 50vw;
`
StyledForm.displayName = 'StyledForm'

export default function NewGameButton ({ handleSubmit, mines }) {
  // const mines = setMines()
  console.log(`mines from NewGameButton component: ${mines}`)
  
  return (
    <StyledForm mines={mines} onSubmit={handleSubmit}>
      <input type="submit" value="New Game" />
    </StyledForm>
  )
}