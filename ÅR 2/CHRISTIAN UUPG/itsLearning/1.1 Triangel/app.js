function triangel() {
    const star = "*"
    for (let i = 1; i <= 5; i++) {
        console.log(star.repeat(i))
    }
}
triangel()


//Cristian facit
function triangel(rows) {
    let count = 1
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < count; j++) {
            document.write("#")
        }
        count++
        document.write("<br>")
    }
}
console.log(triangel(20))


