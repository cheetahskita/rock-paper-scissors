//game();

// for (let i = 1; i < 4; i++) {
//     let playerSelection = playerPlay();
//     let computerSelection = computerPlay();

//     console.log(playRound(playerSelection, computerSelection, i));
// }
buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', (e) => playGame(button))
});

function playGame(button){
    let playerSelection = button.id;
    let computerSelection = computerPlay();

    msg = playRound(playerSelection,computerSelection);

    document.getElementById('results').innerText = msg;
}

function playRound(playerSelection,computerSelection){
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if (playerChoice == computerChoice){
        winLoseMsg = 'You tied!';
    }else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        winLoseMsg = 'You win!';
    }else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        winLoseMsg = 'You win!';
    }else if (playerChoice == 'paper' && computerChoice == 'rock'){
        winLoseMsg = 'You win!';
    }else{
        winLoseMsg = 'You lose!';
    }

    let msg = `You chose ${playerChoice} and the computer chose ${computerChoice}.
    
        ${winLoseMsg}`;
    return msg;
}

function computerPlay(){
    let choice = Math.floor(3*Math.random());
    switch(choice){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

function playerPlay(){
    let playerChoice = prompt('Rock, paper, or scissors?');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
    } else{
        playerChoice = prompt('Please only enter rock, paper, or scissors.');
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;
}