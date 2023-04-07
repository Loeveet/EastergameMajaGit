const imagenav = document.getElementById("mynav")
addSidePicture()
let time = 0;
let interval;
let timertext = document.getElementById("timer")
let nailedtimer = document.getElementById("nailed-timer")
let timeToHit = 5
timertext.innerHTML = "Tryck på starta för att starta klockan. <br>Tryck på Stoppa för att stoppa klockan.<br> Försök att stanna klockan på " + timeToHit + " sekunder"


function addSidePicture() {
  let image = document.createElement("img")
  image.setAttribute("src", "images/maja.jpg")
  image.setAttribute("width", "100%")
  imagenav.appendChild(image)
}
function startTimer() {
  nailedtimer.innerHTML = ""
  interval = setInterval(() => {
    time++;
    console.log(time);
  }, 1000);
  timertext.innerHTML = "Klockan är igång!"

}

function stopTimer() {
  clearInterval(interval);
  timertext.innerHTML = "Din tid: " + time
  if (time === timeToHit) {
    nailedtimer.innerHTML = "Snyggt! Nu kan du gå vidare till nästa sida! <a href='04page.html' class='move-on'>Gå vidare</a>"
  }
  else if (time > timeToHit - 2 && time < timeToHit + 2) {
    nailedtimer.innerHTML = "Åh, nästan! Försök igen!"
  }
  else {
    nailedtimer.innerHTML = "Försök igen!"
  }
  time = 0
}