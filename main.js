const playDisplay = ["✊", "✋", "✌️"]; // Variable for possible play choices
let life = [3, 3]; // Variable for the score [Player Score, Ennemy Score]
let gameEnded = 0;

const buttons = document.querySelectorAll("button");
const playerPlayCard = document.querySelector(".player-play");
const ennemyPlayCard = document.querySelector(".ennemy-play");
const announcement = document.querySelector(".announcement");
const playerLife = document.querySelector(".player-life");
const ennemyLife = document.querySelector(".ennemy-life");
const githubLogo = document.querySelector("#github-logo");

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
        ennemyLife.classList.add('hit');
        return;
    }

    if (roundResult === 0) {
        --life[0];
        playerLife.textContent = `Life: ${life[0]}`
        playerLife.classList.add('hit');
    }
}


function EnnemyPlay() {
    // This function choose what the computer will play randomly
    const ennemyPlay = Math.floor(Math.random() * 3);
    return ennemyPlay;
}


function init() {
    console.log("init");
    life = [3, 3];
    playerLife.textContent = `Life: ${life[0]}`;
    ennemyLife.textContent = `Life: ${life[1]}`;
    playerLife.style.cssText = "color: #FCDAB7;";
    ennemyLife.style.cssText = "color: #FCDAB7;";
    announcement.style.cssText = "color: #FCDAB7;";
    announcement.style.cssText = "color: #FCDAB7;";
    gameEnded = 0;
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
    // updade lifes
    updadeLife(roundResult);


    // If player or ennemy life fall to 0, end the game and announce game result.
    if (life[0] === 0) {
        announcement.textContent = "You lost this battle! You do not have any more life. Try again!";
        announcement.style.cssText = "color: red;"
        playerLife.style.cssText = "color: red;"
        gameEnded = 1;
    }
    if (life[1] === 0) {
        announcement.textContent = "You won this battle! Press one of the buttons to start a new game!";
        announcement.style.cssText = "color: green;"
        ennemyLife.style.cssText = "color: red;"
        gameEnded = 1;
    }
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return // skip if it's not a transform 
    this.classList.remove("hit");
}


// Start the game when one of the button is clicked
buttons.forEach(button => button.addEventListener("click", game));

// Remove the class "hit" when after the animation
playerLife.addEventListener("transitionend", removeTransition);
ennemyLife.addEventListener("transitionend", removeTransition);

// ***************************
// JavaScript Consmetic animation 
//***************************

function onMouseover(e) {
    // Make the github icon roll when mouse is over
    // Make the buttons grow when mouse over
    if (this.id === "github-logo") {
        this.classList.add("githubMouseover");
        return
    };
    this.classList.add("buttonMouseover");
}

function ofMouseover(e) {
    // Remove the animation when mouse is out.
    if (this.id === "github-logo") {
        this.classList.remove("githubMouseover");
        return
    };
    this.classList.remove("buttonMouseover");
}


buttons.forEach(button => button.addEventListener("mouseover", onMouseover));
buttons.forEach(button => button.addEventListener("mouseout", ofMouseover));

githubLogo.addEventListener("mouseover", onMouseover);
githubLogo.addEventListener("mouseout", ofMouseover);