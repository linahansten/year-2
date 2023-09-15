import './style.css'


type Ball = {
  radius: number,
  x: number,
  y: number,
  fillColor: string,
  visible: boolean
};

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);
canvas.width = 800;
canvas.height = 600;

const balls: Ball[] = [
  {
    radius: 50,
    x: canvas.width / 2 - 200,
    y: canvas.height / 2,
    fillColor: 'red',
    visible: false,
  }, {
    radius: 50,
    x: canvas.width / 2,
    y: canvas.height / 2,
    fillColor: 'green',
    visible: false,
  }, {
    radius: 50,
    x: canvas.width / 2 + 200,
    y: canvas.height / 2,
    fillColor: 'blue',
    visible: false,
  }];

let time = 0;

requestAnimationFrame(gameLoop);
let previousElapsed: number = 0;

function gameLoop(elapsed: number) {

  const deltaTime = (elapsed - previousElapsed) / 1000;
  previousElapsed = elapsed;
  requestAnimationFrame(gameLoop);
  update(deltaTime);
  render();
};

function update(deltaTime: number) {
  time += deltaTime;
};

function render() {
  console.log(time)
  if (Math.floor(time) == 1) {
    balls[0].visible = true
  };
  if (Math.floor(time) == 2) {
    balls[1].visible = true
  };
  if (Math.floor(time) == 3) {
    balls[2].visible = true
  };
  if (balls[0].visible == true)
    drawCircle(balls[0].x, balls[0].y, balls[0].radius, balls[0].fillColor);
  if (balls[1].visible == true)
    drawCircle(balls[1].x, balls[1].y, balls[1].radius, balls[1].fillColor);
  if (balls[2].visible == true)
    drawCircle(balls[2].x, balls[2].y, balls[2].radius, balls[2].fillColor);
};

function drawCircle(x: number, y: number, radius: number, fillColor: string,) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);

  context.fillStyle = fillColor;
  context.fill();
  context.closePath()
};