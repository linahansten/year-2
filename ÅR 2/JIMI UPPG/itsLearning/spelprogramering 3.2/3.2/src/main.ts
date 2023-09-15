const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

type Ball = {
    radius: number,
    x: number,
    y: number,
    fillColor: string,
    strokeColor: string,
    strokeWidth: number,
    visible: boolean
};

const balls: Ball[] = [
    {
      radius: 70,
      x: canvas.width / 2,
      y: canvas.height / 2,
      fillColor: 'orange',
      strokeColor: 'darkred',
      strokeWidth: 8,
      visible: false
    }
];

let time = 0;

requestAnimationFrame(gameLoop);
let previousElapsed: number = 0;

function gameLoop(elapsed: number) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const deltaTime = (elapsed - previousElapsed) / 1000;
  previousElapsed = elapsed;
  requestAnimationFrame(gameLoop);
  update(deltaTime);
};

function update(deltaTime: number) {
    time += deltaTime;
    if(Math.floor(time) % 2 === 0) {
        console.log("active")
        balls[0].visible = true;
        if(balls[0].visible == true) {
            drawCircle(balls[0].x, balls[0].y, balls[0].radius, balls[0].fillColor, balls[0].strokeColor, balls[0].strokeWidth);
        } 
    }
    else {
        balls[0].visible = false;
    };
};

function drawCircle(x: number, y: number, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = fillColor;
  context.fill();
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.stroke();
  context.closePath()
};