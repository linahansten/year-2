const el = document.querySelector("html");

function changeBackground() {
    if (el.style.background == "black") {
        el.style.background = "white";
    } else {
        el.style.background = "black";
    }
    console.log("click")
}

el.addEventListener("click", changeBackground);
