export function checkWalls(player, cW, cH, keys) {
    if ((player.y + player.h) > cH) {
        keys.s = false
    }
    if ((player.x + player.w) > cW) {
        keys.d = false
    }
    if (player.x < 0) {
        keys.a = false
    }
    if (player.y < 0) {
        keys.w = false
    }
}