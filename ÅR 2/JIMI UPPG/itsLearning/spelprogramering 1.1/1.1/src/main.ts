
import "./style.css"

  const canvas = document.createElement("canvas")
  document.querySelector("#app")!.append(canvas)
  canvas.width = 800
  canvas.height = 600
  
  const context = canvas.getContext("2d")!

  function schape() {
    //full blue ball
    context.scale(1, 1)
    context.beginPath()
    context.arc(290, 400, 50, 0, Math.PI * 2, true)
    context.fillStyle = "blue"
    context.fill()

    //line blue ball
    context.scale(1, 1)
    context.beginPath()
    context.arc(510, 400, 45, 0, Math.PI * 2, true)
    context.strokeStyle = "blue"
    context.lineWidth = 10
    context.stroke()

    //cube
    context.scale(1, 1)
    context.beginPath()
    context.fillStyle = "red"
    context.fillRect(350, 350, 100, 100)
    context.fill()

    //rectalgel
    
    context.scale(1, 1)
    context.beginPath()
    context.strokeStyle = "red"
    context.strokeRect(250, 225, 300, 100)
    context.stroke()
  }
schape()