
const app = document.querySelector("#app")
 function time() {
  let date = new Date()
  let currentDate = date.toLocaleString()
  app!.innerHTML = `The date and time is ${currentDate}`

}
  setInterval(time, 1000)