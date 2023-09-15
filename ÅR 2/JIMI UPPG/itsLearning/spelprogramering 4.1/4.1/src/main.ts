const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

let visible: boolean = true;

canvas.addEventListener('click', onClick);
function onClick() {
    console.log(visible)
    if(visible){
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, 200, 0 , Math.PI * 2);
            context.fillStyle = "blue"
            context.fill();
            context.strokeStyle = "red"
            context.lineWidth = 10
            context.stroke();
            context.closePath()
    }else if(!visible){
        context.clearRect(0,0, canvas.width, canvas.height)
    }
    if(visible){
        visible = false
    }else if(!visible){
        visible = true
    }
}

