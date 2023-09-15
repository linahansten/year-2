
import "./style.css"

const canvas = document.createElement("canvas")
canvas.width = 800
canvas.height = 600

const context = canvas.getContext("2d")!

context.fillRect(250, 200, 300, 200)

document.querySelector("#box")?.append(canvas)