import {checkWalls, checkCollision} from "./physics.js"
const canvas = document.getElementById("canvas")
const ctx = canvas. getContext("2d")
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
    color:"blue",
}

//player2
function createEnemy(color){
let enemy = {
    x:Math.floor(Math.random() * (canvas.width - 50)),
    y:Math.floor(Math.random() * (canvas.height - 50)),
    w:50,
    h:50,
    color:color,
}
enemyArray.push(enemy)
}
createEnemy("red")
createEnemy("green")

console.log(enemyArray)


function drawEnemy(){
    for(let i = 0;i < enemyArray.length; i++){
        ctx.fillStyle = enemyArray[i].color
        ctx.fillRect(enemyArray[i].x, enemyArray[i].y, enemyArray[i].w, enemyArray[i].h)
    }
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
drawEnemy()
}

function drawPlayer1(x, y, w, h, color){
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
function moveSideToSide(enemyArray){
    enemyArray.forEach(enemy=>{   
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
function line(x, y, dx, dy){
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(dx, dy)
ctx.stroke()
}

setInterval(gameLoop, 1000 / 60)
//line(0, 0, 800, 600)

/*
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.arc(75, 110, 25, 0, Math.PI, true); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
  }
  draw()
*/
 /*
  var c = document.getElementById('canvas');
  var cxt = c.getContext("2d");
  
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  
  
  
  var chinese = "1234567890";
  chinese = chinese.split("");
  
  var font_size =20;
  var columns = c.width/font_size; 
  
  var drops = [];
  
  for(var x=0;x<columns;x++){
    drops[x]=1;
  }
  
  function draw(){
    cxt.fillStyle="rgba(0,0,0,0.05)";
    cxt.fillRect(0,0,c.width,c.height);
    
    cxt.fillStyle = "#0F0";
    cxt.font = font_size+'px arial';
    
    
    for(var i=0;i<drops.length;i++){
      var text = chinese[Math.floor(Math.random()*chinese.length)];
      cxt.fillText(text,i*font_size,drops[i]*font_size);
      
      if(drops[i]*font_size>c.height && Math.random() >0.975)
        drops[i]=0;
      
      //increment y coordinate
      drops[i]++;
  }
    
  }
  setInterval(draw,33);
  */
