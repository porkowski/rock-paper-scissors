
const choices = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;


function Round(playerChoice) {

    let computerChoice = function () {
    return cChoice = choices[Math.floor(Math.random()*choices.length)];
    }
    computerChoice();
    
    console.log("playerChoice ="+ " "+ playerChoice);
    console.log("cChoice ="+ " " +cChoice);

switch(true) {

    case (playerChoice === "rock" && cChoice === "scissors") :
    alert("You win! Rock beats scissors!");
    return player++;
    break;    
    
    case (playerChoice === "rock"&& cChoice === "paper") :
    alert("You lose! Paper beats rock!");
    return computer++;
    break;

    case (playerChoice === "paper" && cChoice === "scissors") :
    alert("You lose! Scissors beats paper!");
    return computer++;
    break;

    case (playerChoice === "paper" && cChoice === "rock") :
    alert("You win! Paper beats rock!");
    return player++;
    break;

    case (playerChoice === "scissors" && cChoice === "rock") :
    alert("You lose! Rock beats scissors!");
    return computer++;
    break;

    case (playerChoice === "scissors" && cChoice === "paper") :
    alert("You win! Scissors beats paper!");
    return player++;
    break;

    case (playerChoice === "rock" && cChoice === "paper") :
    alert("You lose! Paper beats rock!");
    return computer++;
    break;

    case (playerChoice === cChoice) :
    alert("It's a tie, please rematch!");
    break;

    
}

}

const para = document.getElementById("score");
const cPara = document.getElementById("compScore");



const buttons = document.querySelectorAll("button");




buttons.forEach(button => button.addEventListener("click", eGame));
    
function eGame(e) {
    playGame(e.target.id);
}

function playGame(playerChoice) {
    Round(playerChoice);
    para.textContent = `Your score is ${player}`;
    cPara.textContent = `Computer score is ${computer}`;
    endGame();
};



function endGame() {
    if (player >= 5) {
        
        alert("Congrats, you win the game!"); 
        buttons.forEach(button => button.removeEventListener("click", eGame));
    }
     else if (computer >= 5) {
        
        alert("Sorry, you lose the game!");
        buttons.forEach(button => button.removeEventListener("click", eGame));
     
    }};

