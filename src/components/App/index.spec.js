import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  it('renders the App with a game board and eighty-one squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })

  it('renders the App with an isMine property passed down', () => {
    expect(
      toJson(shallow(<App isMine={true} />).dive())
    ).toMatchSnapshot()
  })
}) 