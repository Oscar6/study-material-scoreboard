let homeScore = document.getElementById('home-score');
let awayScore = document.getElementById('away-score');

let homePoints = 0;
let awayPoints = 0;

// Home team
function homePlusOne() {
    homePoints += 1;
    homeScore.textContent = homePoints;
}

function homePlusTwo() {
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function homePlusThree() {
    homePoints += 3;
    homeScore.textContent = homePoints;
}

// Away team
function awayPlusOne() {
    awayPoints += 1;
    awayScore.textContent = awayPoints;
}

function awayPlusTwo() {
    awayPoints += 2;
    awayScore.textContent = awayPoints;
}

function awayPlusThree() {
    awayPoints += 3;
    awayScore.textContent = awayPoints;
}