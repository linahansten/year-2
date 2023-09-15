const prompt = require("prompt-sync")()

const num1 = parseInt(prompt("Enter the first number:"))
const num2 = parseInt(prompt("Enter the second number:"))

const result = num1 + num2
console.log("Sum:", result)
