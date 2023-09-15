// Declare variable with initial value
let count = 0;
const span = document.querySelector("span")

// Listen for button clicks and run function
document.querySelector(".button").addEventListener("click", function () {
    // Increase counter with one
    count++; //same as: count = count + 1

    // Update HTML
    span.innerText = count;

    // Check if swear count reaches 10, then alert
    if (count == 10) alert("Kvaso!");
    if (count == 20) alert("kan du slut din lilla skit!");
});
//Listen for reset button click and run function
document.querySelector(".reset").addEventListener("click", function () {
    count = 0
    //Update HTML
    span.innerText = count

});