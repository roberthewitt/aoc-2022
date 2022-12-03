import { readFile } from 'node:fs/promises'

const day = "03"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const pt1 = data => data.map(x => [x.substring(0, x.length / 2), x.substring(x.length / 2)]).reduce((pr, [a, b]) => { for (let x of a) if (b.includes(x)) return pr + (x.charCodeAt(0) - (x.toLowerCase() === x ? 96 : 38)) }, 0)

const pt2 = ([a, b, c, ...other]) => { for (let x of a) for (let y of b) for (let z of c) if (x === y && x === z) return (x.charCodeAt(0) - (x.toLowerCase() === x ? 96 : 38)) + (other.length === 0 ? 0 : pt2(other)) }

// // pt1
console.log({ pt1: pt1(test), expect: 157 })
console.log({ pt1: pt1(real), expect: "?" })

// // pt2
console.log({ pt2: pt2(test), expects: 70 })
console.log({ pt2: pt2(real), expects: "?" })
