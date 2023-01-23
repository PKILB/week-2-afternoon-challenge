let homeScore = 0
let awayScore = 0






function draw() {
    let homeScoreElem = document.getElementById("home-score")
    let awayScoreElem = document.getElementById("away-score")

    homeScoreElem.innerText = homeScore.toString()
    awayScoreElem.innerText = awayScore.toString()
}

function homeTeamScoreClick() {
    homeScore++
    console.log("The Home Team Scored!!!")
    draw()
}


function awayTeamScoreClick() {
    awayScore++
    console.log("Why'd You Let These Losers Score?!?!?!")
    draw()
}

