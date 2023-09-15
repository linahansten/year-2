function createBalls(number) {
    for (let i = 0; i < number; i++) {
        const ball = document.createElement("div")
        ball.classList.add("ball")
        ball.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px"
        ball.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px"
        document.body.appendChild(ball)
        ball.addEventListener("click", onBallClicked)
    }
}

createBalls(10)

function onBallClicked(e) {
    console.log(e.target)
    document.body.removeChild(e.target)
}