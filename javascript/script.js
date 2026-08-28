let humanScore = 0;
let computerScore = 0;
const playerHandImage = document.querySelector(".player-panel img");
const computerHandImage = document.querySelector(".cpu-panel img");
const imageLinks = "/images/";
const gameLog = document.querySelector(".game-log");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () =>{
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();

    playerHandImage.src = `${imageLinks}${playerSelection}.png`;
    computerHandImage.src = `${imageLinks}${computerSelection}.png`;

    playRound(playerSelection, computerSelection);
})

paper.addEventListener("click", () =>{
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();

    playerHandImage.src = `${imageLinks}${playerSelection}.png`;
    computerHandImage.src = `${imageLinks}${computerSelection}.png`;

    playRound(playerSelection, computerSelection);
})

scissors.addEventListener("click", () =>{
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();

    playerHandImage.src = `${imageLinks}${playerSelection}.png`;
    computerHandImage.src = `${imageLinks}${computerSelection}.png`;

    playRound(playerSelection, computerSelection);
})

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"]
    let randomGenerator = Math.floor(Math.random()* computerChoice.length -1) + 1;
    return computerChoice[randomGenerator];
}

function playRound(humanChoice, computerChoice){
        const gameLogResult = document.createElement("p");
        const playerScore = document.querySelector(".playerScore");
        const cpuScore = document.querySelector(".cpuScore");

        

        if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){

            gameLogResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            gameLog.appendChild(gameLogResult);
            humanScore++
            playerScore.textContent = `${humanScore}`;

        }else if(humanChoice === computerChoice){

            gameLogResult.textContent = `Draw ${humanChoice} vs ${computerChoice}`;
            gameLog.appendChild(gameLogResult);

        }else{
            gameLogResult.textContent = `You Lose! ${humanChoice} loses to ${computerChoice}`;
            gameLog.appendChild(gameLogResult);
            computerScore++
            cpuScore.textContent = `${computerScore}`;
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