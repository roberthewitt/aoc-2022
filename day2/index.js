import { readFile } from 'node:fs/promises'

const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines('./day2/testdata.txt')
const real = await lines('./day2/puzzle.txt')

const pt1 = data => data.map(([o, _, m]) => [op.indexOf(o), me.indexOf(m)])
    .reduce((pr, [oi, mi]) => pr + score[mi] + (mi === oi ? 3 : ((mi + 1) % 3) === oi ? 0 : 6), 0)

const pt2 = data => data.map(([o, _, m]) => [op.indexOf(o), me.indexOf(m)])
    .reduce((pr, [oi, mi]) => pr + (mi === 0 ? (0 + score[oi === 0 ? 2 : oi - 1]) : mi === 1 ? (3 + score[oi]) : (6 + score[(oi + 1) % 3])), 0)

const op =      ["A","B","C"] // [r,p,s]
const me =      ["X","Y","Z"] // [r,p,s] | [l,d,w]
const score =   [ 1 , 2 , 3 ]

// // pt1
console.log({ pt1test: pt1(test) })
console.log({ pt1real: pt1(real) })

// // pt2
console.log({ pt2test: pt2(test), expects: 12 })
console.log({ pt2test: pt2(real), expects: "?" })
