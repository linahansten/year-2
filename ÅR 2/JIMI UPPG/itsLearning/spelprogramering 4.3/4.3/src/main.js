import { checkWalls } from "./physics.js"
const canvas = document.createElement("canvas")
canvas.width = 1000
canvas.height = 700
const context = canvas.getContext("2d")
document.querySelector("#app").append(canvas)

let speed = 4

let player = {
  x: 200,
  y: 300,
  radius: 25,
  color: "black",
}

let keys = {
  w: false,
  a: false,
  d: false,
  s: false,
};

function gameLoop() {
  logic()
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawPlayer(player.x, player.y, player.radius, player.color)
}

function drawPlayer(x, y, radius, color) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2)
  context.fillStyle = color
  context.fill()
}

function logic() {
  checkWalls(player, canvas.width, canvas.height, keys)
  movePlayer()
}

function movePlayer() {
  if (keys.w) {
    player.y -= speed
  }
  if (keys.a) {
    player.x -= speed
  }
  if (keys.s) {
    player.y += speed
  }
  if (keys.d) {
    player.x += speed
  }
}

window.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key == "w") {
    keys.w = true
  }
  if (e.key == "a") {
    keys.a = true
  }
  if (e.key == "s") {
    keys.s = true
  }
  if (e.key == "d") {
    keys.d = true
  }
})

window.addEventListener("keyup", (e) => {
  console.log(e.key)
  if (e.key == "w") {
    keys.w = false
  }
  if (e.key == "a") {
    keys.a = false
  }
  if (e.key == "s") {
    keys.s = false
  }
  if (e.key == "d") {
    keys.d = false
  }
});

setInterval(gameLoop, 1000 / 60)
