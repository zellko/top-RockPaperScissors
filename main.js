function computerPlay() {
    const selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`It's a tie! ${computerSelection} / ${playerSelection}`);
        return 2
    }

    switch (playerSelection) {
        case "scissors":
            if (computerSelection === "paper") {
                console.log(`You Win! ${playerSelection} beat ${computerSelection}`);
                return 1;
            }

        case "rock":
            if (computerSelection === "scissors") {
                console.log(`You Win! ${playerSelection} beat ${computerSelection}`);
                return 1;
            }

        case "paper":
            if (computerSelection === "rock") {
                console.log(`You Win! ${playerSelection} beat ${computerSelection}`);
                return 1;
            }

        default:
            console.log(`You Loose! The ${computerSelection} beat ${playerSelection}`);
            return 0;
    }


}


function game() {
    let score = [0, 0];

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Choose: Rock, Paper or Scissors.");

        let result = playRound(playerSelection, computerPlay());

        switch (result) {
            case 0:
                ++score[0];
                break;

            case 1:
                ++score[1];
                break;

            case 2:
                break;
        }
    }

    console.log(score);

    if (score[0] === score[1]) {
        console.log(`It's a Tie! ${score[1]}-${score[0]}`);
    } else {
        (score[0] > score[1]) ? console.log(`You Loose! ${score[0]}-${score[1]}`) : console.log(`You Win! ${score[1]}-${score[0]}`);
    }
}

game();