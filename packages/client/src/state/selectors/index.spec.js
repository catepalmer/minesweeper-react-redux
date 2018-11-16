import { getMoves } from '.'

describe('state:selectors', () => {
  describe('getMoves', () => {
    it('extracts the moves array from the state', () => {
      const moves = [50, 72, 21]
      const state = { moves }

      expect(getMoves(state)).toBe(moves)
    })
  })
})