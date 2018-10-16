const mines = []

function listMines () {
    for (let i = 0; mines.length < 10; i++) {
        let mineIndex = Math.floor(Math.random() * 81)
        if (mines.find(mine => mine === mineIndex)) return
        mines.push(mineIndex)
    }
    return mines
}




function makeMines (mines = []) {
  if (mines.length === 10) return mines
  const idx = Math.floor(Math.random() * 81)
  if (R.not(R.contains(idx, mines))) mines.push(idx)
  return makeMines(mines)
}



const makeMines = (mines = [], idx = Math.floor(Math.random() * 81)) => {
  if (mines.length === 10) return mines
  if (mines.includes(idx) === false) mines.push(idx)
  return makeMines(mines)
}


const makeMines = (mines = [], idx = Math.floor(Math.random() * 81)) => {
  if (R.length(mines) === 10) return mines
  if (R.not(R.contains(idx, mines))) mines.push(idx)
  return makeMines(mines)
}



// while there are fewer than 10 mines in the mines array,
  // generate a random number between 0 and 80 and, if this
  // number isn't already in the mines array, add it to the
  // mines array.  



import { head, inc, negate, reduceRight } from 'ramda'

const compose = (...funcs) => {
  return (...args) => head(
    reduceRight((acc, f) => [f(...acc)], args, funcs)
  )
}