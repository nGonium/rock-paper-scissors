"use strict"
const WIN_CONDITIONS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
function getComputerChoice() {
    const choices = Object.values(WIN_CONDITIONS);
    return choices[Math.floor(Math.random() * 3)];
}
function getPlayerChoice(test = false) {
    let playerSelection = '';
    if(test === true) {
        return getComputerChoice();
    }
    do {
        playerSelection = prompt('Rock, paper or scissors?');
        playerSelection = playerSelection.toLowerCase();
    } while (!playerSelection in Object.keys(WIN_CONDITIONS));
    return playerSelection;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {result: 'draw', score: 0};
    }
    else if (WIN_CONDITIONS[playerSelection] === computerSelection) {
        return {result: 'player win', score: 1};
    } else {
        return {result: 'computer win', score: -1};

    }
}
function game() {
    let score = 0;
    for (let round = 1; round <= 5; round++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        score += result.score;
        const out = `Player: ${playerSelection}\n` +
            `Computer: ${computerSelection}\n` +
            `${result.result}, current score ${score}`;
        console.log(out);
    }
}
game();