import checkIfPlayed from '.'

describe('utilities:checkIfPlayed', () => {
  it('returns false if moves array not provided', () => {
    expect(checkIfPlayed(4)).toBe(false)
  })

  it('returns true if square is in moves array', () => {
    expect(checkIfPlayed(4, [4, 0])).toBe(true)
  })

  it('returns false if square is not in moves array', () => {
    expect(checkIfPlayed(0, [4, 3, 2])).toBe(false)
  })

})