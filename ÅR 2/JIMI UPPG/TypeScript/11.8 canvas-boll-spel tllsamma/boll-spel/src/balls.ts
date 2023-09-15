import { randomFloat } from "./random";

type Ball = {
  radius: number,
  x: number,
  y: number,
  vx: number,
  vy: number
}

const balls: Ball[] = [];

export function ballsCount() {
  return balls.length;
}

export function createBall(x: number, y: number) {
  balls.push({
    radius: 40,
    x,
    y,
    vx: randomFloat(-7, 7),
    vy: randomFloat(-7, 7)
  });
}

export function removeBall(ball: Ball) {
  const index = balls.findIndex(obj => obj === ball);
  balls.splice(index, 1);
}

export function removeAllBalls() {
  balls.splice(0, balls.length);
}

export function updateBalls(width: number, height: number) {
  for(let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    ball.x += ball.vx;
    ball.y += ball.vy;
    // Top
    if(ball.y - ball.radius <= 0) {
      ball.y = ball.radius;
      ball.vy *= -1;
    }
    // Right
    if(ball.x + ball.radius >= width) {
      ball.x = width - ball.radius;
      ball.vx *= -1;
    }
    // Bottom
    if(ball.y + ball.radius >= height) {
      ball.y = height - ball.radius;
      ball.vy *= -1;
    }
    // Left
    if(ball.x - ball.radius <= 0) {
      ball.x = ball.radius;
      ball.vx *= -1;
    }
  }
}

export function renderBalls(context: CanvasRenderingContext2D) {
  for(let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    context.beginPath(); 
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.closePath();

    context.fillStyle = 'red';
    context.fill();

    context.lineWidth = 8;
    context.strokeStyle = 'maroon';
    context.stroke();
  }
}

export function handleBallClick(x: number, y: number, onClickCallback: (ball: Ball) => void) {
  for(let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    const distance = Math.sqrt((ball.x - x)*(ball.x - x) + (ball.y - y)*(ball.y - y));
    if(distance <= ball.radius) {
      onClickCallback(ball);
    }
  }
}