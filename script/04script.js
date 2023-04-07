const imagenav = document.getElementById("mynav")
addSidePicture()
const riddles = [{ riddle: "Vad är det som kan sitta i en hörna men ändå åka jorden runt?", answer: "frimärke" },
{ riddle: "Vilket djur är det som kan se bra?", answer: "zebra" },
{ riddle: "Vad blir blötare och blötare ju mer du torkar?", answer: "handduk" },
{ riddle: "Vad går över vatten utan att nudda det?", answer: "bro" },
{ riddle: "Vad går genom städer utan att röra sig?", answer: "väg" },
{ riddle: "Vad blir större och större ju mer man tar bort, men mindre ju mer man lägger till?", answer: "grop" },
{ riddle: "Vad har fyra ben på dagen men sex ben på natten?", answer: "säng" },
{ riddle: "Vad har du ovanför ditt huvud men under din mössa?", answer: "hår" },
{ riddle: "Vilken råtta äter inte ost?", answer: "dammråtta" }];
const lastClue = "Soffa"
let rndNum = rndInt(0, riddles.length)
showRiddle(rndNum)


function showRiddle(rndNum) {
    let riddle = riddles[rndNum].riddle
    document.getElementById("riddle").innerHTML = riddle

}

function checkAnswer() {
    let answer = document.getElementById("riddleAnswer").value.toLowerCase()
    let rightAnswer = "<span>Grattis, det var rätt!<br> Här kommer en sista ledtråd: " + lastClue + "<br><br>Lycka till!</span>"
    let wrongAnswer = "<span>Tyvärr, gissa igen. Var noga med stavning!</span>"

    document.getElementById("displayAnswer2").innerHTML = (answer === riddles[rndNum].answer ? rightAnswer : wrongAnswer)
    
}




function addSidePicture() {
    let image = document.createElement("img")
    image.setAttribute("src", "images/maja.jpg")
    image.setAttribute("width", "100%")
    imagenav.appendChild(image)
}



// Generera ett slumpat heltal mellan min (inklusive) och max (inklusive)
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function reloadPage() {
    location.reload();
}