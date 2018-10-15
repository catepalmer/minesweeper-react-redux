import styled from 'styled-components'

const beginner = {
  numRows: 9,
  numColumns: 9
}

const intermediate = {
  numRows: 16,
  numColumns: 16
}

const expert = {
  numRows: 16,
  numColumns: 30
}

const Board = styled.div`
  align-self: center;
  display: grid;
  grid-area: board;
  grid-gap: 0;
  grid-template-columns: ${expert.numColumns * 3.5}vh;
  grid-template-rows: 9vh ${expert.numRows * 3.5}vh;
  height: ${9 + expert.numRows * 3.5}vh;
  justify-self: center;
  margin: auto;
  width: ${expert.numColumns * 3.5}vh;
`
Board.displayName = 'Board'

export default Board