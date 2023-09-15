import { ballsCount, createBall, handleBallClick, removeAllBalls, removeBall, renderBalls, updateBalls } from "./balls";
import { randomInt } from "./random";

let width: number;
let height: number;

const totalBallsCount = 10;

// Game State
enum GameState {
  IDLE,
  PLAYING,
  GAME_OVER
}
let gameState = GameState.IDLE;
let time = 0;
// ---

function reset() {
  gameState = GameState.IDLE;
  time = 0;
  removeAllBalls();
  for(let i = 0; i < totalBallsCount; i++) {
    createBall(
      randomInt(50, width - 50),
      randomInt(50, height - 50)
    );
  }
}

function onClick(x: number, y: number) {
  handleBallClick(x, y, ball => {
    removeBall(ball);
    if(gameState === GameState.IDLE) {
      gameState = GameState.PLAYING;
    }
    if(gameState === GameState.PLAYING && ballsCount() < 1) {
      gameState = GameState.GAME_OVER;
    }
  });
}

function onKeyDown(e: KeyboardEvent) {
  if(e.key.toUpperCase() === 'R') {
    reset();
  }
} 

function update(deltaTime: number) {
  updateBalls(width, height);

  if(gameState === GameState.IDLE) {
    // Vad ska vi uppdatera när spelet inte har startat.
  }
  else if(gameState === GameState.PLAYING) {
    // Vad ska vi uppdatera när spelet är igång?
    time += deltaTime;
  }
  else if(gameState === GameState.GAME_OVER) {
    // Vad ska vi uppdatera när spelet är slut?
    
  }
}

function render(context: CanvasRenderingContext2D) {
  context.clearRect(0, 0, width, height);
  renderBalls(context);
  if(gameState === GameState.GAME_OVER) {
    context.font = '100px sans-serif';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText(time.toFixed(2) + ' sec', width/2, height/2);

    context.font = '20px sans-serif';
    context.fillText('Press "R" to play again', width/2, height/2 + 50);
  }
}

export default function startGame(canvas: HTMLCanvasElement) {
  width = canvas.width;
  height = canvas.height;
  const context = canvas.getContext('2d')!;
  let previousElapsed: number = 0;
  function gameLoop(elapsed: number) {
    requestAnimationFrame(gameLoop);

    const deltaTime = (elapsed - previousElapsed) / 1000;
    previousElapsed = elapsed;

    update(deltaTime);
    render(context);
  }
  canvas.addEventListener('pointerdown', e => onClick(e.offsetX, e.offsetY));
  window.addEventListener('keydown', onKeyDown);
  reset();
  requestAnimationFrame(gameLoop);
}