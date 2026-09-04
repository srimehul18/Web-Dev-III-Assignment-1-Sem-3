import crypto from 'crypto'
let Rolls = Number(process.argv[2]) || 1
console.log("Dice Generator Started")
for (let i = 1; i <= Rolls; i++) {
    let val = crypto.randomInt(1, 7)
    console.log("Roll", i, "Dice Rolled:", val)
}
console.log("Dice Generator Finished")