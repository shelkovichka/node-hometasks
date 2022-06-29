'use strict'

process.argv.splice(0, 2)
let sum = process.argv.reduce((a, b) => +a + +b)
console.log(sum);