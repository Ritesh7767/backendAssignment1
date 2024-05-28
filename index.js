const crypto = require("crypto")

const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


switch(operation){
    case "add" : return console.log(num1 + num2)
    case "sub" : return console.log(num1 - num2)
    case "mult" : return console.log(num1 * num2)
    case "divide" : return console.log(num1 / num2)
    case "sin" : return console.log(Math.sin(num1))
    case "cos" : return console.log(Math.cos(num1))
    case 'tan' : return console.log(Math.tan(num1))
    case "random" : return crypto.randomBytes(num1, (err, byte) => console.log(byte.toString('binary')))
    default : return console.log("Invalid operation") 
}
