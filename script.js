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

    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    }else{
        return "Invalid Choice";
    }
}
