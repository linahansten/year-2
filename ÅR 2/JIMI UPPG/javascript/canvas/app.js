
function draw() {
    const canvas = document.getElementById("canvas")
    canvas.width = 800
    canvas.height = 600
    canvas.style.border = "3px solid black"
    canvas.style.background = "lightgray"

    const ctx = canvas.getContext("2d")
    //ctx.strokeRect(25, 25, 25, 25)
    // let player = {
    //     x: 200,
    //     y: 210,
    //     r: 100,
    //     startAngle: Math.PI * 2,
    //     endAngle: 0,
    // }

    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
            ctx.fillStyle = "white"

            //ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(
            // 255 - 42.5 * j,
            //)})`
            function Bmax() {
                ctx.scale(0.75, 0.5);
                ctx.beginPath()
                ctx.arc(200, 210, 100, 0, Math.PI * 2, true)
                ctx.lineWidth = 3
                ctx.fill()
                ctx.stroke()

                ctx.beginPath()
                ctx.moveTo(235, 220)
                ctx.arc(150, 220, 20, 0, Math.PI * 2, true)
                ctx.fillStyle = "black"
                ctx.fill()
                ctx.stroke()

                ctx.beginPath()
                ctx.moveTo(275, 220)
                ctx.arc(255, 220, 20, 0, Math.PI * 2, true)
                ctx.fillStyle = "black"
                ctx.fill()
                ctx.stroke()
            }
            Bmax()
        }
    }
    // for (let i = 0; i < 50; i++) {
    //     for (let j = 0; j < 50; j++) {
    //         ctx.fillStyle = `rgb(${Math.floor(255 - 10 * i)}, ${Math.floor(
    //             255 - 10 * j,
    //         )}, 0)`
    //         ctx.fillRect(j * 25, i * 25, 25, 25)
    //     }
    // }

}
draw()
// function drawPlayer1(x, y, w, h, color) {
//     //Ritar ur en fyrkant
//     ctx.fillRect(x, y, w, h)
//     ctx.fillStyle = color
// }

// let keys = {
//     w: false,
//     a: false,
//     d: false,
//     s: false,
// }
// function movePlayer() {
//     if (keys.w) {
//         player.y -= speed
//     }
//     if (keys.a) {
//         player.x -= speed
//     }
//     if (keys.s) {
//         player.y += speed
//     }
//     if (keys.d) {
//         player.x += speed
//     }
// }

// //Kolla om tangent är nedtryckt
// window.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     if (e.key == "w") {
//         keys.w = true
//     }
//     if (e.key == "a") {
//         keys.a = true
//     }
//     if (e.key == "s") {
//         keys.s = true
//     }
//     if (e.key == "d") {
//         keys.d = true
//     }
// })
// window.addEventListener("keyup", (e) => {
//     console.log(e.key)
//     if (e.key == "w") {
//         keys.w = false
//     }
//     if (e.key == "a") {
//         keys.a = false
//     }
//     if (e.key == "s") {
//         keys.s = false
//     }
//     if (e.key == "d") {
//         keys.d = false
//     }
// })
