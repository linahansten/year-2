export function checkWalls(player, cW, cH, keys){
    if((player.y + player.h) > cH){
keys.s =false
    }
 if((player.x + player.w) > cW){
keys.d =false
    }
if(player.x < 0){
    keys.a =false
    }
if(player.y < 0){
     keys.w =false
    }
}

export function checkCollision(player,enemy, keys){
enemy.forEach(e=>{
     //Player Right side
if((player.x + player.w) >= e.x && 
     //Player Bottom side
(player.y + player.h) >= e.y &&
     //Player Top side
player.y <= (e.y + e.h) &&
        //Player Left side
player.x <= (e.x + e.w))
{
    keys.d = false
}

    //Player Bottom side
if((player.y + player.h) >= e.y &&
    //Player Right side
(player.x + player.w) > e.x &&
    //Player Left side
player.x < (e.x + e.w) &&
    //Player Top side
player.y < (e.y + e.h))
{
    keys.s = false
}

    //Player Left side
if(player.x <= (e.x + e.w) &&
    //Player Bottom side
(player.y + player.h) > e.y &&
    //Player Top side
player.y < (e.y + e.h) &&
    //Player Right side
(player.x + player.w) > e.x)
{
    keys.a = false
}

    //Player Top side
if( player.y <= (e.y + e.h) &&
    //Player Right side
(player.x + player.w) > e.x &&
    //Player Left side
player.x <= (e.x + e.w) &&
    //Player Bottom side
(player.y + player.h) > e.y)
{
    keys.w = false
}
})
}
