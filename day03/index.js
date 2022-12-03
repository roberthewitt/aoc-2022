import { readFile } from 'node:fs/promises'

const day = "03"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const pt1 = data => data.reduce((pr, line)=> {
    const sub1 = line.substring(0,line.length/2)
    const sub2 = line.substring(line.length/2)
    for (let x of sub1) {
        if (sub2.includes(x)) {
            const val = x.charCodeAt(0) - (x.toLowerCase() === x ? 96 : 38)
            console.log({sub1, sub2, x, val})
            return pr + val
        }
    }
    
    return pr
}, 0)

// // pt1
console.log({ pt1test: pt1(test) })
console.log({ pt1real: pt1(real) })

// // pt2
// console.log({ pt2test: pt2(test), expects: 12 })
// console.log({ pt2test: pt2(real), expects: "?" })
