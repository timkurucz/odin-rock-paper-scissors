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
    switch (playerSelection){
        case "rock":
            if (computerSelection == "rock") {
                console.log("It's a tie!")
            } else if (computerSelection == "paper") {
                console.log("YOU LOSE!  Paper beats rock.")
            } else {
                console.log("YOU WIN! Rock beats scissors!")
            }
            break;
        case "paper":
            if (computerSelection == "paper") {
                console.log("It's a tie!")
            } else if (computerSelection == "scissors") {
                console.log("YOU LOSE!  Scissors beat paper!")
            } else {
                console.log("YOU WIN!  Paper beats rock!")
            }
            break;
        case "scissors":
            if (computerSelection == "scissors") {
                console.log("It's a tie!")
            } else if (computerSelection == "rock") {
                console.log("YOU LOSE!  Rock beats scissors!")
            } else {
                console.log("YOU WIN!  Scissors beat paper!")
            }
            break;
    }
}

function game() {
    let playerWin = 0
    let computerWin = 0
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1));
        const playerSelection = "rock"
        const computerSelection = computerPlay()
        console.log("Player selection: " + playerSelection);
        console.log("Computer selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();