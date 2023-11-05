function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors")
    return playerChoice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Draw"
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" ||playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins"
    } else {
        return "Computer wins"
    }
}

function game() {
    let result;
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++){
        result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if (result == "Player wins"){
            playerCount++;
        } else if (result == "Computer wins"){
            computerCount++;
        } else {
            playerCount++;
            computerCount++;
        }
    }
    if (playerCount > computerCount){
        return "Player wins!"
    } else if (computerCount > playerCount){
        return "Computer wins!"
    } else {
        return "Draw"
    }
}

console.log(game());