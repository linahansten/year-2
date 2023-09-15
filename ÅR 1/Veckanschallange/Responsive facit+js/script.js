const htmlElement = document.getElementById("hcolor");

document.querySelector("#primary").addEventListener("click", function () {
    let name = prompt("Enter you name");

    if (name) {
        htmlElement.innerText = name;
    } else {
        if (name);
        htmlElement.innerText = "unknown"
    }
    console.log(name);
})