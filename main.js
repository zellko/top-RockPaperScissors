const playDisplay = ["✊", "✋", "✌️"]; // Variable for possible play choices
let life = [3, 3]; // Variable for the score [Player Score, Ennemy Score]
let gameEnded = 0;

const buttons = document.querySelectorAll("button");
const playerPlayCard = document.querySelector(".player-play");
const ennemyPlayCard = document.querySelector(".ennemy-play");
const announcement = document.querySelector(".announcement");
const playerLife = document.querySelector(".player-life");
const ennemyLife = document.querySelector(".ennemy-life");


function playRound(playerSelection, ennemySelection) {
    // Check if the playerSelection is valid. NOT NEEDED WITH UI
    // playerSelection = playerSelection.toLowerCase();
    // if (!(playSelection.includes(playerSelection))) {
    //     console.log("It's not a valid entry, please try again");
    //     return;
    // }

    // Check if the player choice is same as computer choice, in this case it's a tie.
    if (playerSelection === ennemySelection) {
        announcement.textContent = `It's a tie! Nobody is loosing life!`;
        return 2;
    }

    // Check if the player beat the computer. Will return 1 if player win, 0 if loose
    if (playerSelection === 0 && ennemySelection === 2) {
        announcement.textContent = `You Win! ${playDisplay[playerSelection]} beat ${playDisplay[ennemySelection]}`;
        return 1;
    }
    if (playerSelection === 1 && ennemySelection === 0) {
        announcement.textContent = `You Win! ${playDisplay[playerSelection]} beat ${playDisplay[ennemySelection]}`;
        return 1;
    }
    if (playerSelection === 2 && ennemySelection === 1) {
        announcement.textContent = `You Win! ${playDisplay[playerSelection]} beat ${playDisplay[ennemySelection]}`;
        return 1;
    }
    announcement.textContent = `You Loose 1 life! ${playDisplay[ennemySelection]} beat ${playDisplay[playerSelection]}`;
    return 0;

}


function updadeLife(roundResult) {
    // This function update the life of the player or ennemy 
    if (roundResult === 1) {
        --life[1];
        ennemyLife.textContent = `Life: ${life[1]}`
        return;
    }

    if (roundResult === 0) {
        --life[0];
        playerLife.textContent = `Life: ${life[0]}`
    }
}


function EnnemyPlay() {
    // This function choose what the computer will play randomly
    const ennemyPlay = Math.floor(Math.random() * 3);
    return ennemyPlay;
}


function init() {
    life = [3, 3];
    gameEnded = 0;
    playerLife.textContent = `Life: ${life[0]}`;
    ennemyLife.textContent = `Life: ${life[1]}`;
    announcement.style.cssText = "color: #FCDAB7;"
}


function game(e) {
    // This function process the game states and call helpers functions. 
    let roundResult = 0;

    // If a game was played before, we reset the variables and the UI.
    if (gameEnded) init();

    const playerPlay = Number(this.id); //Get the player card choice
    const ennemyPlay = EnnemyPlay(); //Get the ennemy card

    // Display the choosen cards on the screen
    playerPlayCard.textContent = playDisplay[playerPlay];
    ennemyPlayCard.textContent = playDisplay[ennemyPlay];

    // Get the result of the round
    roundResult = playRound(playerPlay, ennemyPlay);

    // Upgrade lifes
    updadeLife(roundResult);

    // If player or ennemy life fall to 0, end the game and announce game result.
    if (life[0] === 0) {
        announcement.textContent = "You lost this battle! You do not have any more life. Try again!";
        announcement.style.cssText = "color: red;"
        gameEnded = 1;
    }
    if (life[1] === 0) {
        announcement.textContent = "You won this battle! Press one of the buttons to start a new game!";
        announcement.style.cssText = "color: green;"
        gameEnded = 1;
    }
}


buttons.forEach(button => button.addEventListener("click", game));