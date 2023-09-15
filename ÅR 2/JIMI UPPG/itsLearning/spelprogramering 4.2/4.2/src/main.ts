const canvas = document.createElement('canvas')
canvas.width = 1000
canvas.height = 700
const context = canvas.getContext('2d')!
document.querySelector('#app')!.append(canvas)
window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

let visible1 = false
let visible2 = false
let visible3 = false
let visible4 = false
let visible5 = false

function onKeyDown(e:any) {
  if (e.key === "1") {
    visible1 = true
  }
  if (visible1){
    context.beginPath();
    context.arc(200, canvas.height / 2, 50, 0 , Math.PI * 2)
    context.fillStyle = "blue"
    context.fill();
    context.strokeStyle = "red"
    context.lineWidth = 10
    context.stroke();
    context.closePath()
  }
  
  else if (e.key === "2") {
    visible2 = true
  }
  if (visible2){
    context.beginPath();
    context.arc(300, canvas.height / 2, 50, 0 , Math.PI * 2)
    context.fillStyle = "blue"
    context.fill();
    context.strokeStyle = "red"
    context.lineWidth = 10
    context.stroke();
    context.closePath()
  }
  
  else if (e.key === "3") {
    visible3 = true
  }
  if (visible3){
    context.beginPath();
    context.arc(400, canvas.height / 2, 50, 0 , Math.PI * 2)
    context.fillStyle = "blue"
    context.fill();
    context.strokeStyle = "red"
    context.lineWidth = 10
    context.stroke();
    context.closePath()
  }
  
  else if (e.key === "4") {
    visible4 = true
  }
  if (visible4){
    context.beginPath();
    context.arc(500, canvas.height / 2, 50, 0 , Math.PI * 2)
    context.fillStyle = "blue"
    context.fill();
    context.strokeStyle = "red"
    context.lineWidth = 10
    context.stroke();
    context.closePath()
  }

  else if (e.key === "5") {
    visible5 = true
  }
  if (visible5){
    context.beginPath();
    context.arc(600, canvas.height / 2, 50, 0 , Math.PI * 2)
    context.fillStyle = "blue"
    context.fill();
    context.strokeStyle = "red"
    context.lineWidth = 10
    context.stroke();
    context.closePath()
  }
}

function onKeyUp(e:any) {
  if (e.key === "1") {
    visible1 = false
    context.clearRect(0,0, canvas.width, canvas.height)
  } else if (e.key === "2") {
    visible2 = false
    context.clearRect(0,0, canvas.width, canvas.height)
  } else if (e.key === "3") {
    visible3 = false
    context.clearRect(0,0, canvas.width, canvas.height)
  } else if (e.key === "4") {
    visible4 = false
    context.clearRect(0,0, canvas.width, canvas.height)
  } else if (e.key === "5") {
    visible5 = false
    context.clearRect(0,0, canvas.width, canvas.height)
  }


}

