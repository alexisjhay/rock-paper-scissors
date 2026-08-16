let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let randomGenerator = Math.floor(Math.random()* 3) + 1;

    if(randomGenerator === 1){
        return "rock"
    }else if(randomGenerator === 2){
        return "paper"
    }else if(randomGenerator === 3){
        return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose a Hand!")
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice){
    
    if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log(`You Win!!! ${humanChoice} beats ${computerChoice}`)
        humanScore++
        console.log(`Player Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }else{
        console.log(`You Lose!!! ${humanChoice} beats ${computerChoice}`)
        computerScore++
        console.log(`Player Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
}