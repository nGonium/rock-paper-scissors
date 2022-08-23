"use strict"
const rpsBtns = document.querySelector('#rps-btns');
const resultsDisplay = document.querySelector('#results')
const WIN_CONDITIONS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
const GAME_STATE = {
    score: 0,
    roundCount: 1,
    selections: {}
}
// Allows line breaks in results
resultsDisplay.style['white-space'] = 'pre-line';

Array.from(rpsBtns.children).forEach(btn => {
    btn.addEventListener('click', e => {
        playRound(e.target.textContent.toLowerCase(), getComputerChoice());
        displayResults();
    })
});

function getComputerChoice() {
    const choices = Object.values(WIN_CONDITIONS);
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    GAME_STATE.selections.player = playerSelection;
    GAME_STATE.selections.computer = computerSelection;
    if (playerSelection === computerSelection) {
        GAME_STATE.round = {result: 'draw', score: 0};
    } else if (WIN_CONDITIONS[playerSelection] === computerSelection) {
        GAME_STATE.round = {result: 'player win', score: 1};
    } else {
        GAME_STATE.round =  {result: 'computer win', score: -1};
    }
    GAME_STATE.score += GAME_STATE.round.score;
    GAME_STATE.roundCount++;
}

function displayResults() {
    let out = 
    `Player: ${GAME_STATE.selections.player}\r\n` +
    `Computer: ${GAME_STATE.selections.computer}\r\n` +
    `${GAME_STATE.round.result}, current score ${GAME_STATE.score}`;
    
    if (GAME_STATE.roundCount >= 5) {
        out = GAME_STATE.score > 0 ? `Player wins the game\r\n` + out:
        GAME_STATE.score < 0 ? 'Computer wins the game\r\n' + out:
        'Game ended in a draw\r\n' + out;
    }
    
    resultsDisplay.textContent = out;

}
