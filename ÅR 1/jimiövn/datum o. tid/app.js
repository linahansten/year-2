const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");

// Kallar på funktionen och kör alla instruktioner som finns i den!
update();

// Kalla på funtionen varje sekund
setInterval(update, 1000)

// Skapa funktionen
function update() {
    const date = new Date();
    dateElement.textContent = date.toLocaleDateString("sv-SE");
    timeElement.textContent = date.toLocaleTimeString("sv-SE");
}


tiden();


function tiden() {
    const now = new Date()
    const then = new Date("2022-12-24, 00:00:00")

    const time = then.getTime() - now.getTime();
    const days = time / (1000 * 60 * 60 * 24);

    document.querySelector("#bla").innerText = (now.toLocaleDateString("sv-SE") + " and " + then.toLocaleDateString("sv-SE") + " are:" + days + " days");
    document.querySelector("#tid").innerText = time
}

