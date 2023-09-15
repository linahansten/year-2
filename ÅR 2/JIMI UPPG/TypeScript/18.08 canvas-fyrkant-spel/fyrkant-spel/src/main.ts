import "./style.css";
import {checkWalls, checkCollision} from "./physics.js"
const canvas = document.createElement("canvas")
const ctx = canvas. getContext("2d")!
document.querySelector("#box")?.append(canvas)
let dx = 2
let dy = 2
let speed = 4
const enemyArray = []

canvas.width = 800
canvas.height = 600
canvas.style.border = "1px solid black"

//Ändrar färg
//ctx.fillStyle ="red"
ctx.strokeStyle ="red"

//player1
let player = {
    x:200,
    y:300,
    w:50,
    h:50,
    color:"red",
}


let keys = {
    w:false,
    a:false,
    d:false,
    s:false,
}

function gameLoop(){
    logic()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
drawPlayer1(player.x,player.y, player.w, player.h,player.color)
// drawEnemy()
}

function drawPlayer1(x:number, y:number, w:number, h:number, color:string){
//Ritar ur en fyrkant
ctx.fillRect(x, y, w, h)
ctx.fillStyle = color
}

    function logic(){
        checkWalls(player, canvas.width, canvas.height, keys)
        movePlayer()
        moveSideToSide(enemyArray)
        checkCollision(player,enemyArray,keys)
    }

function movePlayer(){
if(keys.w){
    player.y -= speed
}
if(keys.a){
    player.x -= speed
}
if(keys.s){
    player.y += speed
}
if(keys.d){
    player.x += speed
}
}
function moveSideToSide(enemyArray: any){
    enemyArray.forEach(enemy =>{   
    if(enemy.x > canvas.width - enemy.w || enemy.x < 0){
        dx = -dx
    }
    enemy.x += dx 

    if(enemy.y > canvas.height - enemy.h || enemy.y < 0){
        dy = -dy
    }
    enemy.y += dy 
    })
   
}

//Kolla om tangent är nedtryckt
window.addEventListener("keydown", (e)=>{
    console.log(e.key)
    if(e.key == "w"){
        keys.w = true
    }
    if(e.key == "a"){
        keys.a = true
    }
    if(e.key == "s"){
        keys.s = true
    }
    if(e.key == "d"){
        keys.d = true
    }
})
window.addEventListener("keyup", (e)=>{
    console.log(e.key)
    if(e.key == "w"){
        keys.w = false
    }
    if(e.key == "a"){
        keys.a = false
    }
    if(e.key == "s"){
        keys.s = false
    }
    if(e.key == "d"){
        keys.d = false
    }
})


//Ritar ut en linje
function line(x:number, y:number, dx:number, dy:number){
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(dx, dy)
ctx.stroke()
}

setInterval(gameLoop, 1000 / 60)
