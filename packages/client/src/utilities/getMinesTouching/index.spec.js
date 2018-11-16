import { getMinesTouching, getSquares } from '.'

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

  it('returns 3 for an edge square that is touching three mines', () => {
    expect(getMinesTouching(44, [18, 37, 57, 65, 4, 19, 76, 35, 43, 52])).toEqual(3)
  })

  it('returns 4 for an edge square that is touching four mines', () => {
    expect(getMinesTouching(3, [2, 4, 12, 13, 57, 19, 76, 35, 43, 52])).toEqual(4)
  })

  it('returns an array of the correct squares that a square in the top row is touching', () => {
    expect(getSquares(3)).toEqual([-1, 1, 8, 9, 10])
  })

  it('returns an array of the correct squares that a square in the bottom row is touching', () => {
    expect(getSquares(76)).toEqual([-10, -9, -8, -1, 1])
  })

  it('returns an array of the squares that a square in the top left corner is touching', () => {
    expect(getSquares(0)).toEqual([1, 9, 10])
  })

  it('returns an array of the squares that a square in the top right corner is touching', () => {
    expect(getSquares(8)).toEqual([-1, 8, 9])
  })

  it('returns an array of the squares that a square in the bottom right corner is touching', () => {
    expect(getSquares(80)).toEqual([-10, -9, -1])
  })

  it('returns an array of the squares that a square in the bottom left corner is touching', () => {
    expect(getSquares(72)).toEqual([-9, -8, 1])
  })
  
})