//Player : computer selection pairs that result in player victory
const WINCONDITIONS = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Rock'
}

// game();
// playerPlay()

function game(rounds = 5){
    let score = 0;
    for(i = 0; i < rounds; i++){
        let playerSelection = prompt('Select: Rock, Paper or Scissors?')
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        while(!(playerSelection in WINCONDITIONS)){
            playerSelection = prompt('Invalid selection, select again: Rock, Paper or Scissors?');
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }
        const computerSelection = computerPlay();

        const round = playRound(playerSelection, computerSelection);
        score += round;
        console.log(
            'Player: ' + playerSelection, 
            '\nComputer: ' + computerSelection, 
            '\nScore: ' + (round > 0 ? '+' + round : round),
            '\nTotal score: ' + score);
    }
 
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) return 0;
    if(WINCONDITIONS[playerSelection] === computerSelection) return 1;
    return -1;
}

function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playerPlay(){
    let choiceElements = document.querySelectorAll('[data-choice]');
    choiceElements.forEach(el => {
        el.addEventListener('click', e => {
            playerPlay(e)
        })
    })
}