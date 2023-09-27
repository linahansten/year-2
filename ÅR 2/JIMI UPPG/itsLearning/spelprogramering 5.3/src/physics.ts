export function checkWalls(player: { x: number; y: number; w: number; h: number }, canvasWidth: number, canvasHeight: number, keys: { w: boolean; a: boolean; s: boolean; d: boolean }) {
    if (player.y + player.h > canvasHeight) {
        keys.s = false
    }
    if (player.x + player.w > canvasWidth) {
        keys.d = false
    }
    if (player.x < 0) {
        keys.a = false
    }
    if (player.y < 0) {
        keys.w = false
    }
}

export function checkCollision(
    player: { x: number; y: number; w: number; h: number; color: string },
    blockArray: {
      x: number
      y: number
      w: number
      h: number
      color: string
      dx: number
      dy: number
    }[],
  ): boolean {
    for (let i = 0; i < blockArray.length; i++) {
      const block = blockArray[i]
      if (
        player.x + player.w > block.x &&
        player.x < block.x + block.w &&
        player.y + player.h > block.y &&
        player.y < block.y + block.h
      ) {
        return true
      }
    }
    return false
  }
  

