const imagenav = document.getElementById("mynav")
addSidePicture()
let counter = 0
let riddle = "Var smakar godis allra bäst?"
let clue = "Är det på natten, utomhus eller kanske i munnen?"
document.getElementById("riddle").innerHTML = riddle


function checkAnswer() {

    let answer = document.getElementById("guess1").value.toLowerCase()
    let rightAnswer = "<span>Grattis, det var rätt! <a href='02page.html' class='move-on'>Gå vidare</a></span>"
    let wrongAnswer = "<span>Tyvärr, gissa igen. Var noga med stavning!</span>"

    document.getElementById("displayAnswer").innerHTML = (answer === "mun" || answer === "munnen" ? rightAnswer : wrongAnswer)
    answer === "mun" || answer ===  "munnen" ? counter = 0 : counter++
    if (counter > 3) document.getElementById("displayAnswer").innerHTML = "<span>Ni har kämpat på bra! <a href='02page.html' class='move-on'>Gå vidare</a></span>"

}

function getclue(){
    alert(clue)
}

function addSidePicture(){
    let image = document.createElement("img")
    image.setAttribute("src", "images/maja.jpg")
    image.setAttribute("width", "100%")
    imagenav.appendChild(image)
}