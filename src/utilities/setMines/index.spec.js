import setMines from '.'

describe('utilities:setMines', () => {
  it('returns an array of ten mine indices', () => {
    expect(setMines()).toHaveLength(10)
  })
})