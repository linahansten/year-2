const prompt = require("prompt-sync")()

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
const num1 = parseInt(prompt("Enter the first number:"))
const num2 = parseInt(prompt("Enter the second number:"))
const num3 = parseInt(prompt("Enter the third number:"))

const result1 = evenOrOdd(num1)
const result2 = evenOrOdd(num2)
const result3 = evenOrOdd(num3)

console.log("Result:", result1 + ", " + result2 + ", " + result3)
