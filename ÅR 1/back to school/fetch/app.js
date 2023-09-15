

const button = document.querySelector(".HämtaData")
const box = document.querySelector(".box")

function fetchData() {
    fetch("http://10.111.3.78:3000/api/users")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.forEach(element => {
                console.log(element)
                box.innerHTML += `<div><p>${element.name}</p><p>${element.email}</p></div>`
            })
        })
}



button.addEventListener("click", function () {
    fetchData()
})
