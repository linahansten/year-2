
import { distance, handleCircleCollision } from './physics'
import './style.css'

type Ball = {
  radius: number,
  x: number,
  y: number,
  vx: number,
  vy: number,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number
}

const canvas = document.createElement('canvas')

canvas.width = 800
canvas.height = 600
const context = canvas.getContext('2d')!
document.querySelector('#app')!.append(canvas)

const balls: Ball[] = [
  {
    radius: 90,
    x: 100,
    y: 100,
    vx: 0,
    vy: 0,
    fillColor: 'cyan',
    strokeColor: 'purple',
    strokeWidth: 8
  }
]

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i]
    drawCircle(ball.x, ball.y, ball.radius, ball.fillColor, ball.strokeColor, ball.strokeWidth);
  }
}

function drawCircle(x: number, y: number, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2)

  context.fillStyle = fillColor
  context.fill()

  context.lineWidth = strokeWidth
  context.strokeStyle = strokeColor
  context.stroke()
}

let draggingBall: Ball | null = null
let isMouseDragging = false

canvas.addEventListener('mousedown', (event) => {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left
  const mouseY = event.clientY - canvas.getBoundingClientRect().top

  for (let i = balls.length - 1; i >= 0; i--) {
    const ball = balls[i]
    const d = distance({ x: mouseX, y: mouseY }, ball)

    if (d <= ball.radius) {
      draggingBall = ball
      isMouseDragging = true
      break
    }
  }
})

canvas.addEventListener('mousemove', (event) => {
  if (draggingBall && isMouseDragging) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left
    const mouseY = event.clientY - canvas.getBoundingClientRect().top
    draggingBall.x = mouseX
    draggingBall.y = mouseY
  }
})

canvas.addEventListener('mouseup', () => {
  if (draggingBall) {
    isMouseDragging = false
    if (draggingBall.vx === 0 && draggingBall.vy === 0) {
      draggingBall.vy = 1
    }
    draggingBall = null
  }
})

canvas.addEventListener('mouseout', () => {
  isMouseDragging = false
  if (draggingBall) {
    draggingBall.vy = 1
    draggingBall = null
  }
})

function gameLoop() {
  requestAnimationFrame(gameLoop)
  update()
  render()
}

function update() {
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i]

    ball.x += ball.vx
    ball.y += ball.vy

    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
      ball.vx = -ball.vx
    }

    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
      ball.y = canvas.height - ball.radius;
     ball.vy *= -0.8
    }   
   
    ball.vy += 0.1
  }
}

gameLoop()
