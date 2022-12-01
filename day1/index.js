import { readFile } from 'node:fs/promises'

const numbers = async file => (await readFile(file, { encoding: "utf-8" })).split("\n").map(Number).concat([0])
const test = await numbers('./day1/testdata.txt')
const real = await numbers('./day1/puzzle.txt')



const pt1 = data => data.reduce(({ e, m }, c) => c == 0 ? { e: 0, m: m > e ? m : e } : { e: e + c, m }, { e: 0, m: 0 })

const pt2 = data => data.reduce(({ e, m }, c) => c == 0 ? { e: 0, m: m.reduce((pr, cu) => e > cu && pr.s == 0 ? { s: 1, r: [...pr.r, e].sort((x1, x2) => x1 - x2) } : { s: pr.s, r: [...pr.r, cu].sort((x1, x2) => x1 - x2) }, { r: [], s: 0 }).r } : { e: e + c, m }, { e: 0, m: [0, 0, 0] })

// pt1
console.log({ pt1test: pt1(test) })
console.log({ pt1real: pt1(real) })

// pt2
console.log({ pt2test: pt2(test), answer: pt2(test).m.reduce((p, c) => p+c, 0) })
console.log({ pt2real: pt2(real), answer: pt2(real).m.reduce((p, c) => p+c, 0) })
