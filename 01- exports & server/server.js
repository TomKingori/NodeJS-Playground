// console.log("Hello there")

// console.log(global)

const os = require('os')
const path = require('path')
const {add, subtract, multiply, divide} =  require('./math')


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

console.log(add(4,3))
console.log(subtract(4,3))
console.log(multiply(4,3))
console.log(divide(4,3))