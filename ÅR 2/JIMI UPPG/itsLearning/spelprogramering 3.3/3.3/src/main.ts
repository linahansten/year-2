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
    enlarge: boolean
};

const balls: Ball[] = [
    {
      radius: 30,
      x: canvas.width / 2,
      y: canvas.height / 2,
      fillColor: 'orange',
      strokeColor: 'red',
      strokeWidth: 8,
      enlarge: false
    }
];

let time = 0;
let radius: number = balls[0].radius;
let enlarge: boolean = balls[0].enlarge;

requestAnimationFrame(gameLoop);
let previousElapsed: number = 0;

function gameLoop(elapsed: number) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const deltaTime = (elapsed - previousElapsed) / 1000;
  previousElapsed = elapsed;
  requestAnimationFrame(gameLoop);
  update(deltaTime);
  render();
};
function update(deltaTime: number) {
    time += deltaTime;

    if(radius == 30) {
        wait(1000)
        enlarge = true;
    }

    if(enlarge == true) {
        console.log("getting bigger")
        radius = radius + 1;
    }

    if(radius == 200) {
        wait(1000)
        enlarge = false;
    }

    if(enlarge == false) {
        console.log("getting smaller")
        radius = radius - 1;
    };
};

function render() {
    drawCircle(balls[0].x, balls[0].y, radius, balls[0].fillColor, balls[0].strokeColor, balls[0].strokeWidth);
}

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

function wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    
    while(end < start + ms) {
      end = new Date().getTime();
   }
}