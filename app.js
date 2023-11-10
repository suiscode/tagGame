const blueDiv = document.getElementById('blue')
const blueScore = document.getElementById('score-blue')
const redDiv = document.getElementById('red')
const redScore = document.getElementById('score-red')
const arena = document.getElementById('arena')
const winner = document.getElementById('winner')

blueDiv.addEventListener('click', blueClick)
redDiv.addEventListener('click', redClick)

let bluePoints = 50
let redPoints = 50

function blueClick(){
    bluePoints = bluePoints + 5
    redPoints = redPoints - 5
    blueScore.innerHTML= bluePoints
    redScore.innerHTML= redPoints
    blueDiv.style.width = `${bluePoints}%`
    redDiv.style.width = `${redPoints}%`
    checkwin()
    
}

function redClick(){
    redPoints = redPoints + 5
    bluePoints = bluePoints - 5
    redScore.innerHTML= redPoints
    blueScore.innerHTML= bluePoints
    blueDiv.style.width = `${bluePoints}%`
    redDiv.style.width = `${redPoints}%`
    checkwin()
}

function checkwin(){
    if (bluePoints== 100){
        console.log('blue');
        arena.classList.add('disable')
        winner.innerHTML= 'BLUE WON'
        winner.classList.add('show')
    } else if (redPoints ===100){
        console.log('red');
        arena.classList.add('disable')
        winner.innerHTML= 'RED WON'
        winner.classList.add('show')
    }
}


// RESTART BUTTON

function refreshPage(){
    location.reload()
}

document.getElementById('reset').addEventListener('click', refreshPage)
