import sinon from 'sinon'
import setMines from '.'

describe('utilities:setMines', () => {
  it('returns an array of ten mine indices', () => {
    expect(setMines()).toHaveLength(10)
  })

  it('returns an array including the new square if the mines array did not already have ten squares in it', () => {
    sinon.stub(Math, 'random').returns(0.19)
    expect(setMines([4, 17, 80, 3, 38, 19, 29, 34, 72])).toEqual([4, 17, 80, 3, 38, 19, 29, 34, 72, 15])
  })
})


