let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"]
    let randomGenerator = Math.floor(Math.random()* computerChoice.length -1) + 1;
    return computerChoice[randomGenerator];
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