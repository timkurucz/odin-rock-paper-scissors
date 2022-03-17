function computerPlay() {
    let choice = Math.random();

    if (choice < 0.34) {
        return "rock";
    } else if (choice < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case "rock":
            if (computerSelection == "rock") {
                console.log("It's a tie!");
                return "tie";
            } else if (computerSelection == "paper") {
                console.log("YOU LOSE!  Paper beats rock.");
                return "computerWin";
            } else {
                console.log("YOU WIN! Rock beats scissors!");
                return "playerWin";
            }
        case "paper":
            if (computerSelection == "paper") {
                console.log("It's a tie!");
                return "tie";
            } else if (computerSelection == "scissors") {
                console.log("YOU LOSE!  Scissors beat paper!");
                return "computerWin";
            } else {
                console.log("YOU WIN!  Paper beats rock!");
                return "playerWin";
            }
        case "scissors":
            if (computerSelection == "scissors") {
                console.log("It's a tie!");
                return "tie";
            } else if (computerSelection == "rock") {
                console.log("YOU LOSE!  Rock beats scissors!");
                return "computerWin";
            } else {
                console.log("YOU WIN!  Scissors beat paper!");
                return "playerWin";
            }
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1));
        const playerSelection = prompt("Please choose rock, paper or scissors").toLowerCase();
        const computerSelection = computerPlay();
        console.log("Player selection: " + playerSelection);
        console.log("Computer selection: " + computerSelection);
        let winner = playRound(playerSelection, computerSelection);
        if (winner == "playerWin") {
            playerWin++;
        } else if (winner == "computerWin") {
            computerWin++;
        }
    }
    console.log("Player wins: " + playerWin);
    console.log("Computer wins: " + computerWin);

    if (playerWin > computerWin) {
        console.log("The overall winner is YOU!");
    } else if (computerWin > playerWin) {
        console.log("The overall winner is the COMPUTER!");
    } else {
        console.log("This game ends in a tie!");
    }
}

game();