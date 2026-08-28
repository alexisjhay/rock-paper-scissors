let humanScore;
let computerScore;

const gameContainer = document.querySelector(".game-container");
const playerHandImage = document.querySelector(".player-panel img");
const computerHandImage = document.querySelector(".cpu-panel img");
const imageLinks = "images/";
const gameLog = document.querySelector(".gameres");
let gameLogResult = "";

const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");

const gameContainerElements = document.querySelectorAll(".game-container .inner");

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"]
    let randomGenerator = Math.floor(Math.random()* computerChoice.length -1) + 1;
    return computerChoice[randomGenerator];
}

function playRound(humanChoice, computerChoice){
        gameLogResult = document.createElement("p");

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

function gameWinner(hscore, cscore){
    if(hscore === 5){
        const isWinner = "Player";
        createSplashScreen(isWinner);
        disableScreen();
    }else if(cscore === 5){
        const isWinner = "CPU";
        createSplashScreen(isWinner);
        disableScreen();
    }
}

function createSplashScreen(winner){
    const splashScreen = document.createElement("div");
    const splashH2 = document.createElement("h2");
    const splashButton = document.createElement("button");

    splashScreen.classList.add("winner-splash-screen");
    gameContainer.appendChild(splashScreen);

    splashH2.textContent = `${winner} Win!`;
    splashButton.textContent = "Play Again";

    splashScreen.appendChild(splashH2);
    splashScreen.appendChild(splashButton);

    splashButton.addEventListener("click", (e) => {
        clearGameLog();
        resetGame();
        splashScreen.remove();
    })

}
function disableScreen(){
    gameContainerElements.forEach((item) => {
        item.classList.add("disable-content");
    })
}

function enableScreen(){
    gameContainerElements.forEach((item) => {
        item.classList.remove("disable-content");
    })
}

function clearGameLog(){
    gameLog.textContent = ""
}

function resetGame(){
    enableScreen();

    humanScore = 0;
    computerScore = 0;

    playerHandImage.src =`${imageLinks}rock.png`;
    computerHandImage.src =`${imageLinks}rock.png`;

    playerScore.textContent = humanScore;
    cpuScore.textContent = computerScore;

}

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

resetGame();