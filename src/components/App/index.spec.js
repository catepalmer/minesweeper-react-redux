import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  it('renders the App with a blank game board and eighty-one squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })

  it('renders the App with an isMine property passed down', () => {
    expect(
      toJson(shallow(<App isMine={true} />).dive())
    ).toMatchSnapshot()
  })

  // it('renders the App with a game board with three moves: squares 5, 18, and 49', () => {
  //   expect(toJson(shallow(<App moves={[5, 18, 49]} />).dive())).toMatchSnapshot()
  // })

  // it('renders the App with a handleClick passed down if the square is not in the moves array', () => {
  //   expect(toJson(shallow(<App handleClick={() => console.log(`Square ${square}`)} moves={[5, 18, 49]} />).dive())).toMatchSnapshot()
  // })
}) 