// Player : computer selection pairs that result in player victory
const WINCONDITIONS = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Rock'
}

const game = {
    playerScore: 0,
    opponentScore: 0,
    round: 0,
    maxRounds: 20,
    player: 'Player',
    opponent: 'Opponent'
}

startGame()

function playRound(e){
    const playerSelection = e.target.dataset.choice;
    const computerSelection = computerPlay();
    if(playerSelection === computerSelection) return updateGame('Draw');
    if(WINCONDITIONS[playerSelection] === computerSelection) return updateGame('Player');
    return updateGame('Opponent');
}

function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function startGame(){
    game.playerScore = 0,
    game.opponentScore = 0,
    game.round = 0,

    document.querySelector('#player-score').textContent = game.playerScore;
    document.querySelector('#opponent-score').textContent = game.opponentScore;

    // Add event listeners to choice buttons
    document.querySelectorAll('[data-choice]').forEach(
        el => el.addEventListener('click', playRound)
    )
}

function updateGame(winner){
    if(winner === 'Player'){
        game.playerScore++;
        document.querySelector('#player-score').textContent = game.playerScore;
    } else if(winner === 'Opponent'){
        game.opponentScore++;
        document.querySelector('#opponent-score').textContent = game.opponentScore;
    }

    game.round++;
    if(game.round >= game.maxRounds){
        endGame();
    }
}

function endGame(){
    let choiceElements = document.querySelectorAll('[data-choice]');
    choiceElements.forEach(el => {
        el.removeEventListener('click', playRound);
    })
}