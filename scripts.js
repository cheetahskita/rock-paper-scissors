let roundNum = 0, playerScore = 0, computerScore = 0;

buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', (e) => playGame(button))
});

function playGame(button){
    clearResults();
    roundNum++;

    let playerSelection = button.id;
    let computerSelection = computerPlay();

    let msg = playRound(playerSelection,computerSelection, roundNum);

    displayResults(msg);
}

function clearResults(){
    //let text = document.getElementById('text');
    //text.forEach( => childnodes.innerText = "");

    document.getElementById('round').innerText = '';
    document.getElementById('intro').innerText = '';
    document.getElementById('choice').innerText = '';
    document.getElementById('results').innerText = '';
    document.getElementById('score').innerText = '';
}

function playRound(playerSelection, computerSelection, roundNum){
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if (playerChoice == computerChoice){
        winLoseMsg = 'You tied!';
    }else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        winLoseMsg = 'You win!';
        playerScore += 1;
    }else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        winLoseMsg = 'You win!';
        playerScore += 1;
    }else if (playerChoice == 'paper' && computerChoice == 'rock'){
        winLoseMsg = 'You win!';
        playerScore += 1;
    }else{
        winLoseMsg = 'You lose!';
        computerScore += 1;
    }

    let msg = [''];
    msg[0] = `Round: ${roundNum}`;
    msg[1] = `You chose ${playerChoice} <> Computer chose ${computerChoice}`;
    msg[2] = winLoseMsg;
    msg[3] = `Score: You ${playerScore} - Computer ${computerScore}`;

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

async function displayResults(msg){
    let timeDelay = 500;

    document.getElementById('round').innerText = msg[0];
    await animateGame(2*timeDelay);
    document.getElementById('choice').innerText = msg[1];
    await sleep(2*timeDelay);
    document.getElementById('results').innerText = msg[2];
    await sleep(timeDelay);
    document.getElementById('score').innerText = msg[3];
}

async function animateGame(timeDelay){
    let shootTime = 0.4*timeDelay;

    await sleep(timeDelay);
    document.getElementById('intro').innerText = 'Rock';
    await sleep(shootTime);
    document.getElementById('intro').innerText += ', Paper';
    await sleep(shootTime);
    document.getElementById('intro').innerText += ', Scissors';
    await sleep(shootTime);
    document.getElementById('intro').innerText += ', Shoot!';
    await sleep(timeDelay);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
