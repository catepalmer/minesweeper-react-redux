import getMinesTouching from '.'

describe('utilities:getMinesTouching', () => {
  it('returns 1 for a square that is touching one mine', () => {
    expect(getMinesTouching(69, [5, 10, 17, 22, 28, 34, 49, 62, 64, 78])).toEqual(1)
  })

  it('returns 4 for a square that is touching four mines', () => {
    expect(getMinesTouching(40, [4, 9, 23, 80, 70, 30, 32, 31, 36, 50])).toEqual(4)
  })

  it('returns 3 for a square that is touching three mines', () => {
    expect(getMinesTouching(41, [4, 9, 23, 80, 70, 30, 32, 31, 36, 50])).toEqual(3)
  })

  it('returns 1 for a corner square that is touching one mine', () => {
    expect(getMinesTouching(0, [4, 9, 23, 80, 70, 30, 32, 31, 36, 50])).toEqual(1)
  })

  it('returns 2 for an edge square that is touching two mines', () => {
    expect(getMinesTouching(18, [5, 10, 17, 22, 28, 34, 49, 62, 64, 78])).toEqual(2)
  })
})