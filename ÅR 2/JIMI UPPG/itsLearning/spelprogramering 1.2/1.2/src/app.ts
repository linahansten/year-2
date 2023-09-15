import './style.css'
const canvas = document.createElement('canvas')
document.querySelector('#app')!.append(canvas)
const context = canvas.getContext('2d')!
canvas.width = 800
canvas.height = 600

// head
context.beginPath()
context.arc(400, 300, 200, 0, 2 * Math.PI)
context.fillStyle = 'yellow'
context.lineWidth = 10
context.fill()
context.stroke()
context.closePath()

// eyeball
context.beginPath()
context.arc(310, 300, 40, 0, 2 * Math.PI)
context.fillStyle = 'white'
context.lineWidth = 10
context.fill()
context.stroke()
context.closePath()

// eyeball
context.beginPath()
context.arc(480, 300, 40, 0, 2 * Math.PI)
context.fillStyle = 'white'
context.lineWidth = 10
context.fill()
context.stroke()
context.closePath()

// pupil
context.beginPath()
context.arc(480, 304, 8, 0, 2 * Math.PI)
context.fillStyle = 'black'
context.lineWidth = 10
context.fill()
context.stroke()
context.closePath()

// pupil 2
context.beginPath()
context.arc(310, 304, 8, 0, 2 * Math.PI)
context.fillStyle = 'black'
context.lineWidth = 10
context.fill()
context.stroke()
context.closePath()

// mouth
context.beginPath
context.fillStyle = 'red'
context.beginPath()
context.stroke
context.arc(400, 380, 45, 0, Math.PI)
context.fill()
context.stroke()
line(445, 385, 360, 385)
context.closePath()

function line(x: number, y: number, dx: number, dy: number) {
  context.beginPath()
  context.moveTo(x, y)
  context.lineTo(dx, dy)
  context.stroke()
}