/*let numbers = [2, 3, 4, 5, "lina", { name: 'lina' }] // '' = * button

//Kontrollerar antalet index i array
console.log(numbers.length)

console.log(typeof (numbers[5]))

numbers.push("hansten")

console.log(numbers)

numbers = []
*/
///////////////////////////////////////////////////////////////
//övning 1

/*
let number = []
i = 0

for (i = 0; i < 500; i++) {

    let random = Math.floor(Math.random() * 500)
    number.push(random)
}

console.log(number)
*/
/*
const show = document.querySelector(".show")

// have to put in loop to see what object is
let array = [2, 3, 4, 5, "lina"]

show.innerHTML = array
*/
/*
for (let i = 0; i < array.length; i++) {

console.log(array[i])
}
*/

//övning 2

const show = document.querySelector(".show")
let text = document.querySelector("#text")
const button = document.querySelector("button")
let array = []

button.addEventListener("click", function () {

    if (text) {
        array.push(text.value)

        for (i = 0; i < array.length; i++) {
            const bot = document.createElement("div")
            bot.innerText = ""
            bot.innerText += array[i]
            show.appendChild(bot)

        }
        //array = []

    }
    console.log(array)

})


