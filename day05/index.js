import { readFile } from 'node:fs/promises'

const day = "05"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const pt1 = lines => {}

const pt2 = lines => {}

// // pt1
console.log({ pt1: pt1(test), expect: "CMZ" })
console.log({ pt1: pt1(real), expect: "?", tooLow: [], tooHigh: [] })

// // pt2
console.log({ pt2: pt2(test), expects: "?" })
console.log({ pt2: pt2(real), expects: "?", tooLow: [], tooHigh: [] })
