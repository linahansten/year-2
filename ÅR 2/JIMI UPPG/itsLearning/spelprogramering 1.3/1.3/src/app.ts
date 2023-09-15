import './style.css'
const canvas = document.createElement('canvas');
document.querySelector('#app')!.append(canvas);
const context = canvas.getContext('2d')!;
canvas.width = 800;
canvas.height = 600;

// the triangle
context.beginPath();
context.moveTo(canvas.width / 2 - 100, 350);
context.lineTo(canvas.width / 2 + 100, 350);
context.lineTo(canvas.width / 2, canvas.height / 2 - 90);
context.closePath();

// the outline
context.lineWidth = 35;
context.strokeStyle = 'red';
context.stroke();

// the fill color
context.fillStyle = "yellow";
context.fill();