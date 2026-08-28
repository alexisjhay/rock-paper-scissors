let humanScore = 0;
let computerScore = 0;
const playerHandImage = document.querySelector(".player-panel img");
const computerHandImage = document.querySelector(".cpu-panel img");
const imageLinks = "/images/";
const gameLog = document.querySelector(".gameres");

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"]
    let randomGenerator = Math.floor(Math.random()* computerChoice.length -1) + 1;
    return computerChoice[randomGenerator];
}

function playRound(humanChoice, computerChoice){
        const gameLogResult = document.createElement("p");
        const playerScore = document.querySelector(".playerScore");
        const cpuScore = document.querySelector(".cpuScore");

        const humanChoiceToUpperCase = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        const computerChoiceToUpperCase = computerChoice[0].toUpperCase() + computerChoice.slice(1);

        
        if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){

            gameLogResult.innerText = `You Win!
            ${humanChoiceToUpperCase} beats ${computerChoiceToUpperCase}`;
            gameLog.appendChild(gameLogResult);
            humanScore++
            playerScore.textContent = `${humanScore}`;

        }else if(humanChoice === computerChoice){

            gameLogResult.innerText = `Draw
            ${humanChoiceToUpperCase} vs ${computerChoiceToUpperCase}`;
            gameLog.appendChild(gameLogResult);

        }else{
            gameLogResult.innerText = `You Lose!
            ${humanChoiceToUpperCase} loses to ${computerChoiceToUpperCase}`;
            gameLog.appendChild(gameLogResult);
            computerScore++
            cpuScore.textContent = `${computerScore}`;
        }
}


function createSplashScreen(winner){
        const gameContainer = document.querySelector(".game-container");
        const splashScreen = document.createElement("div");
        const splashH2 = document.createElement("h2");
        const splashButton = document.createElement("button");

        splashScreen.classList.add("winner-splash-screen");
        gameContainer.appendChild(splashScreen);

        splashH2.textContent = `${winner} Win!`;
        splashButton.textContent = "Play Again";

        splashScreen.appendChild(splashH2);
        splashScreen.appendChild(splashButton);

}



function startGame(){
    humanScore = 0;
    computerScore = 0;

    const RPSButtons = document.querySelectorAll(".buttons button");
    RPSButtons.forEach((button) => {

    button.addEventListener("click", ()=> {
        const playerSelection = button.id;
        let computerSelection = getComputerChoice();

        playerHandImage.src = `${imageLinks}${playerSelection}.png`;
        computerHandImage.src = `${imageLinks}${computerSelection}.png`;

        playRound(playerSelection, computerSelection);
        gameWinner(humanScore, computerScore);
    })

    });

}

startGame();