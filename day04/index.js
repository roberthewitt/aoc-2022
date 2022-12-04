import { readFile } from 'node:fs/promises'

const day = "04"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const pt1 = lines => lines.reduce((pr, line, row) => {
    const [a,b] = line.split(",")
    const [a1,a2] = a.split("-").map(Number)
    const [b1,b2] = b.split("-").map(Number)
    if (a1 >= b1 && a2 <= b2) {
        // console.log({a1, a2, b1, b2, row: row+1, type:1})
        return pr +1
    } else if (b1 >= a1 && b2 <= a2) {
        // console.log({a1, a2, b1, b2, row: row +1, type:2})
        return pr +1
    }
    return pr
}, 0)

const pt2 = lines => lines.reduce((pr, line, row) => {
    const [a,b] = line.split(",")
    const [a1,a2] = a.split("-").map(Number)
    const [b1,b2] = b.split("-").map(Number)
    if ((a1 >= b1 && a1 <= b2) || (a2 >= b1 && a2 <= b2)) {
        // console.log({a1, a2, b1, b2, row: row+1, type:1})
        return pr +1
    } else if ((b1 >= a1 && b1 <= a2) || (b2 >= a1 && b2 <= a2)) {
        // console.log({a1, a2, b1, b2, row: row +1, type:2})
        return pr +1
    }
    return pr
}, 0)


// // pt1
console.log({ pt1: pt1(test), expect: 2 })
console.log({ pt1: pt1(real), expect: "540", tooLow: [169], tooHigh: [567] })

// // pt2
console.log({ pt2: pt2(test), expects: 4 })
console.log({ pt2: pt2(real), expects: "?" })
