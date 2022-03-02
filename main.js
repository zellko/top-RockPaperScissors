const playSelection = ["rock", "paper", "scissors"]; // Variable for possible play choices
let score = [0, 0]; // Variable for the score [Computer Score, Player Score]


function computerPlay() {
    // This function will choose what the computer will play between "rock", "paper" and "scissors"
    return playSelection[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    // This function will:
    // 1. Check if the playerSelection is valid 
    playerSelection = playerSelection.toLowerCase();

    if (!(playSelection.includes(playerSelection))) {
        console.log("It's not a valid entry, please try again");
        return;
    }

    // 2. Check if the player choice is same as computer choice, in this case it's a tie.
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! ${computerSelection} / ${playerSelection}`);
        return 2
    }

    // 3. Check if the player beat the computer. Will return 1 if player win, 0 if loose
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


function upgradeScore(result) {
    // This function will upgrade the score of the player or computer 
    // score[0] = Computers score, score[1] = Player score
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


function game() {
    // This function will start the game and continue until 5 games are done. 

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Choose: Rock, Paper or Scissors.");
        let result = playRound(playerSelection, computerPlay());

        console.log(result);

        // In case player choice is not valid, the game is not counted
        (result === undefined) ? --i: upgradeScore(result);
    }

    // When 5 games are done, the final score is prompted.
    if (score[0] === score[1]) {
        console.log(`It's a Tie! ${score[1]}-${score[0]}`);
    } else {
        (score[0] > score[1]) ? console.log(`You Loose! ${score[0]}-${score[1]}`): console.log(`You Win! ${score[1]}-${score[0]}`);
    }
}

game();