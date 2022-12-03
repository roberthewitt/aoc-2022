import { readFile } from 'node:fs/promises'

const day = "03"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const pt1 = data => data.reduce((pr, [o, _, m])=> {
    const myI = me.indexOf(m)
    const opI = op.indexOf(o)
    return pr + score[myI] + (myI === opI ? 3 : ((myI + 1) % 3) === opI ? 0 : 6)
}, 0)

// // pt1
console.log({ pt1test: pt1(test) })
// console.log({ pt1real: pt1(real) })

// // pt2
// console.log({ pt2test: pt2(test), expects: 12 })
// console.log({ pt2test: pt2(real), expects: "?" })
