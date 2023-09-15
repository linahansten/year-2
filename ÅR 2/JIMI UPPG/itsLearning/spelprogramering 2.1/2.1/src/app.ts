import './style.css'

const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

let x = 10;
let y = canvas.height / 2;
let vx = 10;



requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
    render();
};

function update() {
    x += vx;

    if (x > canvas.width) {
        x = canvas.width;
        vx = -10;
    };
    if (x < 10) {
        x = 0;
        vx = +10;
    };
};

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y, 40, 'blue', 'black', 7);
};

function drawCircle(x: number, y: number, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);

    context.fillStyle = fillColor;
    context.fill();

    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
};