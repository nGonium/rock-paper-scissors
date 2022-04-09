//Player : computer selection pairs that result in player victory
const WINCONDITIONS = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Rock'
}

game();

function game(){
    let playerSelection = prompt('Select: Rock, Paper or Scissors?')
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    while(!(playerSelection in WINCONDITIONS)){
        playerSelection = prompt('Invalid selection, select again: Rock, Paper or Scissors?')
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    }
    let computerSelection = computerPlay()

    let round = playRound(playerSelection, computerSelection)
    console.log(playerSelection, computerSelection, round);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) return 'DRAW';
    if(WINCONDITIONS[playerSelection] === computerSelection) return 'PLAYERWIN';
    return 'COMPUTERWIN';
}

function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)];
}