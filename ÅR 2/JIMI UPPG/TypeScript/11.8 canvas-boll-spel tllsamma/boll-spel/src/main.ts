import "./style.css";
import startGame from "./game";

const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;

document.querySelector('#app')!.append(canvas);

startGame(canvas);