import { readFile } from 'node:fs/promises'
import { findSourceMap } from 'node:module'

const day = "05"
const lines = async file => (await readFile(file, { encoding: "utf-8" })).split("\n")
const test = await lines(`./day${day}/testdata.txt`)
const real = await lines(`./day${day}/puzzle.txt`)

const debug = ({ log: (...any) => false && console.log(...any)})

const pt1 = (lines, mover) => {
    const boxIdToBoxes = {}
    const indexToBoxId = {}
    const orderOfIndicies = []
    let pattern = lines.splice(0,lines.indexOf("")+1)
    pattern.pop() // remove blank line
    pattern.pop().split("").forEach((id, i) => {
        if (id !== " ") {
            boxIdToBoxes[id] = boxIdToBoxes[id] ?? []
            indexToBoxId[i] = id
            orderOfIndicies.push(id)
        }
    })
    do {
        const inserts = pattern.pop().split("")
        for (const [i, box] of Object.entries(indexToBoxId)) {
            if (inserts[i] !== " ") boxIdToBoxes[box].push(inserts[i])
        }
    } while (pattern.length)
    debug.log({boxIdToBoxes, indexToBoxId, orderOfIndicies})
    
    // move blocks
    mover({lines, boxIdToBoxes})
    debug.log({boxIdToBoxes, indexToBoxId, orderOfIndicies})
    
    // return string of top boxes
    return orderOfIndicies.reduce((pr, cu) => `${pr}${boxIdToBoxes[cu].pop()}`, "")
}

const crateMover9000 = ({lines, boxIdToBoxes}) => {
    for (const line of lines) {
        const [_1, quantity, _2, from, _3, to] = line.split(" ")
        for (let x = 0; x < quantity; x++) {
            boxIdToBoxes[to].push(boxIdToBoxes[from].pop())
        }
    }
}

const crateMover9001 = ({lines, boxIdToBoxes}) => {
    for (const line of lines) {
        const [_1, quantity, _2, from, _3, to] = line.split(" ")
        const tmp = []
        for (let x = 0; x < quantity; x++) {
            tmp.push(boxIdToBoxes[from].pop())
        }
        do {
            boxIdToBoxes[to].push(tmp.pop())
        } while (tmp.length)
    }
}

// // pt1
console.log({ pt1: pt1([...test], crateMover9000), expect: "CMZ" })
console.log({ pt1: pt1([...real], crateMover9000), expect: "FZCMJCRHZ", tooLow: [], tooHigh: [] })

// // pt2
console.log({ pt2: pt1([...test], crateMover9001), expects: "MCD" })
console.log({ pt2: pt1([...real], crateMover9001), expects: "JSDHQMZGF", tooLow: [], tooHigh: [] })
