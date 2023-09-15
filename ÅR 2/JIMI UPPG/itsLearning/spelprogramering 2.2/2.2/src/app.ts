const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

type Ball = {
    radius: number,
    x: number,
    y: number,
    vy: number,
    fillColor: string,
    strokeColor: string,
    strokeWidth: number,
};

const balls: Ball[] = [
    {
      radius: 70,
      x: 200,
      y: 320,
      vy: 3.5,
      fillColor: 'pink',
      strokeColor: 'darkred',
      strokeWidth: 8
    },
    {
      radius: 70,
      x: 500,
      y: 320,
      vy: 5,
      fillColor: 'lightblue',
      strokeColor: 'blue',
      strokeWidth: 8
    },
    {
      radius: 70,
      x: 800,
      y: 320,
      vy: 7,
      fillColor: 'lightgreen',
      strokeColor: 'limegreen',
      strokeWidth: 8
    },
];

gameLoop();

function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
    render();
}
function update() {
    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
  
      ball.y += ball.vy;
  
      // Check top edge collision
      if (ball.y - ball.radius <= 0) {
        ball.vy = -ball.vy;
        ball.y = ball.radius;
      }

      // Check bottom edge collision
      if (ball.y + ball.radius >= canvas.height) {
        ball.vy = -ball.vy;
        ball.y = canvas.height - ball.radius;
      }
    }
}
  
  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    for (const ball of balls) {
      drawCircle(
        ball.x,
        ball.y,
        ball.radius,
        ball.fillColor,
        ball.strokeColor,
        ball.strokeWidth
      );
    }
  }
  
  function drawCircle(
    x: number,
    y: number,
    radius: number,
    fillColor: string,
    strokeColor: string,
    strokeWidth: number ) {

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
  
    context.fillStyle = fillColor;
    context.fill();
  
    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
}