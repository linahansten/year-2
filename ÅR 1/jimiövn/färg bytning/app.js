
const button = document.querySelector("button");
const colors = ["red", "yellow", "green", "yellow"];
let index = 0;

button.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[++index % colors.length];
})

/*
button.addEventListener("click", onButtonClick);

function onButtonClick() {
    // index = index + 1;
    index++;
    // if (index >= colors.length)
    //   index = 0;

    console.log(index, index % colors.length);

    document.body.style.backgroundColor = colors[index % colors.length];
}
*/

/* Detta är ett sätt som fungerar, men kanske inte så bra!

const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

document.body.style.backgroundColor = "green";

function onButtonClick() {
    if (document.body.style.backgroundColor === "green") {
        document.body.style.backgroundColor = "yellow";
    }
    else if (document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "red"
    }
    else {
        document.body.style.backgroundColor = "green"
    }
} 

*/
