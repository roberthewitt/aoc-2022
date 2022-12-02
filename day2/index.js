import { readFile } from 'node:fs/promises'

const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines('./day2/testdata.txt')
const real = await lines('./day2/puzzle.txt')

const pt1 = data => data.reduce((pr, [o, _, m])=> {
    const myI = me.indexOf(m)
    const opI = op.indexOf(o)
    return pr + score[myI] + (myI === opI ? 3 : ((myI + 1) % 3) === opI ? 0 : 6)
}, 0)

const pt2 = data => data.reduce((pr, [o, _, m])=> {
    const myI = me.indexOf(m)
    const opI = op.indexOf(o)
    return pr + (myI === 0 ? (0 + score[opI === 0 ? 2 : opI -1]) : myI === 1 ? (3 + score[opI]) : (6 + score[(opI +1) %3]))
}, 0)

const op =      ["A","B","C"] // [r,p,s]
const me =      ["X","Y","Z"] // [r,p,s] | [l,d,w]
const score =   [ 1 , 2 , 3 ]

// // pt1
console.log({ pt1test: pt1(test) })
console.log({ pt1real: pt1(real) })

// // pt2
console.log({ pt2test: pt2(test), expects: 12 })
console.log({ pt2test: pt2(real), expects: "?" })
