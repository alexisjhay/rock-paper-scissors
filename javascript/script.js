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
    let humanChoice = 
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice){
    
        if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
            console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`)
        }else if(humanChoice === computerChoice){
            console.log(`Draw ${humanChoice} vs ${computerChoice}`)
            console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`)
        }else{
            console.log(`You Lose! ${humanChoice} loses to ${computerChoice}`)
            computerScore++
            console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`)
        }
}

function playGame(){
    for(i = 1; i <=5; i++){
        console.log(`Round ${i}`)
        console.log(``)
        playRound(getHumanChoice(), getComputerChoice())
        console.log(``)
        console.log(`---------------------------------------`)
    }
    if(humanScore > computerScore){
        console.log(`Congratulations! Player: ${humanScore} | Computer ${computerScore}`)
    }else if(humanScore === computerScore){
        console.log(`Draw! Player: ${humanScore} | Computer ${computerScore}`)
    }else{
        console.log(`Better Luck Next Time! Player: ${humanScore} | Computer ${computerScore}`)
    }
}

playGame();