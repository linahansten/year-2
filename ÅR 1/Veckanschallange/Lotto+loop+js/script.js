/* function fullName(first, last) {
    return first + " " + last;
};
 const name = fullName("lina , hansten");*/

let count = 0;

function lockNumber(element) {
    if (count < 7) {
        element.classList.add("locked");
        count++;
    }
}

function generateNumbers() {
    while (count < 7) {
        // 1. random number
        const rNumber = Math.floor(Math.random() * 40) + 1;

        console.log(rNumber);

        // 2. get element with number
        const element = document.getElementById(rNumber);


    }
    // TODO: loop seven times an check if number is already locked
};