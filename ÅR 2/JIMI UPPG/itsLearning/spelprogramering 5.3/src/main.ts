import { checkWalls, checkCollision } from "./physics.ts";

const canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext("2d")!;
document.querySelector("#canvas")!.append(canvas);

const speed: number = 4;

canvas.style.border = "1px solid black";

// Change strokeStyle
context.strokeStyle = "red";

// Player
const player: { x: number; y: number; w: number; h: number; color: string } = {
  x: 200,
  y: 300,
  w: 50,
  h: 50,
  color: "blue",
};

type Block = {
  x: number
  y: number
  w: number
  h: number
  color: string
  dx: number
  dy: number
}

function createBlock(color: string, dx: number, dy: number): Block[] {
  const blockArray: Block[] = [
    {
      x: 500,
      y: 500,
      w: 200,
      h: 100,
      color: color,
      dx: dx,
      dy: dy,
    },
    {
      x: 600,
      y: 600,
      w: 300,
      h: 200,
      color: color,
      dx: dx,
      dy: dy,
    },
  ]

  return blockArray
}

const blockArray = createBlock("green", 0, 0)

function drawBlock() {
  for (let i = 0; i < blockArray.length; i++) {
    context.fillStyle = blockArray[i].color;
    context.fillRect(blockArray[i].x, blockArray[i].y, blockArray[i].w, blockArray[i].h)
  }
}

const keys: { w: boolean; a: boolean; d: boolean; s: boolean } = {
  w: false,
  a: false,
  d: false,
  s: false,
}

function gameLoop() {
  logic();
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawPlayer(player.x, player.y, player.w, player.h, player.color)
  drawBlock()
  requestAnimationFrame(gameLoop)
}

function drawPlayer(x: number, y: number, w: number, h: number, color: string) {
  context.fillStyle = color
  context.fillRect(x, y, w, h)
}

function logic() {
  checkWalls(player, canvas.width, canvas.height, keys)
  movePlayer()
  checkCollision(player, blockArray)
}

function movePlayer() {
  if (keys.w) {
    player.y -= speed
    if (checkCollision(player, blockArray)) {
      player.y += speed
    }
  }
  if (keys.a) {
    player.x -= speed
    if (checkCollision(player, blockArray)) {
      player.x += speed
    }
  }
  if (keys.s) {
    player.y += speed
    if (checkCollision(player, blockArray)) {
      player.y -= speed
    }
  }
  if (keys.d) {
    player.x += speed
    if (checkCollision(player, blockArray)) {
      player.x -= speed
    }
  }
}

// Key event listeners
window.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "w") keys.w = true
  if (e.key === "a") keys.a = true
  if (e.key === "s") keys.s = true
  if (e.key === "d") keys.d = true
});

window.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "w") keys.w = false
  if (e.key === "a") keys.a = false
  if (e.key === "s") keys.s = false
  if (e.key === "d") keys.d = false
})

// Initialize the game loop
requestAnimationFrame(gameLoop)
