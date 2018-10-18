import React from 'react'
import { shallow } from 'enzyme'

import Square from '.'

describe('components:Square', () => {
  it('renders the Square with the proper cursor if a click handler is provided', () => {
    expect(
      toJson(shallow(<Square handleClick={() => null} index={0} isMine={false} minesTouching={1} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for a mine in the top left square', () => {
    expect(
      toJson(shallow(<Square isMine={true} index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for a non-mine touching 4 mines in the top left square', () => {
    expect(
      toJson(shallow(<Square isMine={false} minesTouching={4} index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for a mine in the top right square', () => {
    expect(
      toJson(shallow(<Square isMine={true} index={8} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for a non-mine touching 2 mines in the bottom left square', () => {
    expect(
      toJson(shallow(<Square isMine={false} minesTouching={2} index={72} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for a non-mine touching 0 mines in the bottom right square', () => {
    expect(
      toJson(shallow(<Square isMine={false} minesTouching={0} index={80} />).dive())
    ).toMatchSnapshot()
  })

})