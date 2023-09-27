import { checkWalls } from "./physics.ts"

const canvas = document.createElement("canvas")
canvas.width = 1000
canvas.height = 700
const context = canvas.getContext("2d")!
document.querySelector("#app")!.append(canvas)

const ball = {
  x: 400,
  y: 300,
  radius: 25,
  color: "cyan",
  vx: 0,
  vy: 0
}

const gravity = 0.2
const jumpStrength = -5

const keys: any = {
  w: false,
  a: false,
  s: false,
  d: false,
}

// Event listeners for key presses
window.addEventListener("keydown", (e) => {
  keys[e.key] = true
})

window.addEventListener("keyup", (e) => {
  keys[e.key] = false
})

function gameLoop() {
  requestAnimationFrame(gameLoop)
  logic()
  context.clearRect(0, 0, canvas.width, canvas.height)
  update()
  render()
}

function logic() {
  checkWalls(ball, canvas.width, canvas.height, keys)
}

function update() {
  ball.vy += gravity

  // Jump if the 'w' key is pressed and the ball is on the ground
  if (keys.w && ball.y + ball.radius >= canvas.height) {
    ball.vy = jumpStrength
  }

  if (keys.a) {
    ball.vx = -4
  } else if (keys.d) {
    ball.vx = 4
  } else {
    ball.vx = 0
  }

  // Update ball position
  ball.x += ball.vx
  ball.y += ball.vy

  // Keep the ball within the canvas
  if (ball.x - ball.radius < 0) {
    ball.x = ball.radius
    ball.vx *= -0.5; // Reverse horizontal velocity and apply some friction
  }
  if (ball.x + ball.radius > canvas.width) {
    ball.x = canvas.width - ball.radius
    ball.vx *= -0.5; // Reverse horizontal velocity and apply some friction
  }
  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius
    ball.vy *= -0.5; // Reverse vertical velocity and apply some friction
  }
  if (ball.y + ball.radius > canvas.height) {
    ball.y = canvas.height - ball.radius
    ball.vy *= -0.4 // Reverse vertical velocity and apply some friction
  }
}


function render() {
  drawBall(ball.x, ball.y, ball.radius, ball.color)
}

function drawBall(x: number, y: number, radius: number, color: string) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2)
  context.fillStyle = color
  context.fill()
}

gameLoop()
