let redScore = 0;
let blueScore = 0;

function addScore(player, points) {
    if (player === 'red') {
        redScore += points;
        document.getElementById('red-score').textContent = redScore;
    } else if (player === 'blue') {
        blueScore += points;
        document.getElementById('blue-score').textContent = blueScore;
    }
}

function deductScore(player) {
    if (player === 'red' && redScore > 0) {
        redScore -= 1;
        document.getElementById('red-score').textContent = redScore;
    } else if (player === 'blue' && blueScore > 0) {
        blueScore -= 1;
        document.getElementById('blue-score').textContent = blueScore;
    }
}

function resetScores() {
    redScore = 0;
    blueScore = 0;
    document.getElementById('red-score').textContent = redScore;
    document.getElementById('blue-score').textContent = blueScore;
}