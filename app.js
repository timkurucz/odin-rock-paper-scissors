console.log("Hello world!")

function computerPlay() {
    let choice = Math.random();

    if (choice < 0.34) {
        return "rock"
    } else if (choice < 0.67) {
        return "paper"
    } else {
        return "scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {

    }
}

const playerSelection = "rock"
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));