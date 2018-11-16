import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  it('renders the App with a blank game board and eighty-one squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })
})