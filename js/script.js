function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function getPlayerChoice(playerChoice) {
    return playerChoice.toLowerCase()
}
