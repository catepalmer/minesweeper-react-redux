import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import checkForBlankEpic from './'
import { squareClicked } from '../../actions'
import { checkIfPlayed, getMinesTouching, getSquaresTouching } from '../../../utilities'

// jest.mock('../../actions', () => ({
//   gameOver: jest.fn().mockReturnValue({ type: 'GAME_OVER' }),
//   squareClicked: jest.fn().mockReturnValue({ type: 'SQUARE_CLICKED' })
// }))

// jest.mock('../../selectors', () => ({
//   getMoves: jest
//     .fn()
//     .mockReturnValueOnce([])                            // no moves
//     .mockReturnValueOnce([4, 6, 0, 7])                  // < 5 moves
//     .mockReturnValueOnce([4, 6, 0, 7, 1])               // 4 < moves < 9
//     .mockReturnValueOnce([4, 6, 0, 7, 8])               // 4 < moves < 9
//     .mockReturnValueOnce([0, 1, 2, 4, 3, 5, 7, 6, 8])   // full board
//     .mockReturnValue([0, 1, 2, 5, 8, 7, 6, 3, 4])       // full board
// }))

// jest.mock('../../../utilities', () => ({
//   getBoard: jest
//     .fn()
//     .mockReturnValueOnce([
//       'x',
//       'x',
//       undefined,
//       undefined,
//       'x',
//       undefined,
//       'o',
//       'o',
//       undefined
//     ]) // Five plays (no win) [4, 6, 0, 7, 1]
//     .mockReturnValueOnce([
//       'x',
//       undefined,
//       undefined,
//       undefined,
//       'x',
//       undefined,
//       'o',
//       'o',
//       'x'
//     ]) // Five plays win [4, 6, 0, 7, 8]
//     .mockReturnValueOnce(['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x']) // Tie game [0, 1, 2, 4, 3, 5, 7, 6, 8]
//     .mockReturnValue(['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']), // Double win [0, 1, 2, 5, 8, 7, 6, 3, 4]
//   getWins: jest
//     .fn()
//     .mockReturnValueOnce() // Check but no win
//     .mockReturnValueOnce([[0, 4, 8]]) // Check and win
//     .mockReturnValueOnce([]) // Check and tie
//     .mockReturnValue([[0, 4, 8], [2, 4, 6]]) // Check and win
// }))

// describe('epics', function () {
//   describe('checkForWin', function () {
//     it(`checks for and responds to wins correctly`, function () {
//       const epicMiddleware = createEpicMiddleware(checkForWinEpic)
//       const store = configureMockStore([epicMiddleware])({})
//       const action = squareClicked()

//       store.dispatch(action)
//       store.dispatch(action)
//       store.dispatch(action)
//       store.dispatch(action)
//       store.dispatch(action)
//       store.dispatch(action)

//       expect(gameOver.mock.calls).toEqual([
//         [[0, 4, 8, 2, 6], 'x'],
//         [[0, 4, 8], 'x'],
//         [[]],
//         [[0, 4, 8, 2, 6], 'x']
//       ])
//       expect(store.getActions()).toEqual([
//         action,
//         action,
//         action,
//         gameOver(),
//         action,
//         gameOver(),
//         action,
//         gameOver(),
//         action,
//         gameOver()
//       ])

//       epicMiddleware.replaceEpic(checkForWinEpic)
//     })
//   })
// })