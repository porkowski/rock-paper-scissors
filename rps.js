
const choices = ["rock", "paper", "scissors"];
let pChoice = prompt ("Please type either Rock, Paper, or Scissors.");
let playerChoice = pChoice.toLowerCase();


let computerChoice = function () {
return cChoice = choices[Math.floor(Math.random()*choices.length)];

}
computerChoice();


function Round () {

    
    console.log(playerChoice);
    console.log(cChoice);

switch(true) {

    case (playerChoice === "rock" && cChoice === "scissors") :
    console.log("You win! Rock beats scissors!");
    break;    
    
    case (playerChoice === "rock"&& cChoice === "paper") :
    console.log("You lose! Paper beats rock!");
    break;

    case (playerChoice === "paper" && cChoice === "scissors") :
    console.log("You lose! Scissors beats paper!");
    break;

    case (playerChoice === "paper" && cChoice === "rock") :
    console.log("You win! Paper beats rock!");
    break;

    case (playerChoice === "scissors" && cChoice === "rock") :
    console.log("You lose! Rock beats scissors!");
    break;

    case (playerChoice === "scissors" && cChoice === "paper") :
    console.log("You win! Scissors beats paper!");
    break;

    case (playerChoice === "rock" && cChoice === "paper") :
    console.log("You lose! Paper beats rock!");
    break;

    case (playerChoice === cChoice) :
    console.log("It's a tie! Rematch if you please!");
    break;
}
}

Round();












// BELOW IS MY ATTEMPT AT IF/ ELSE STATEMENTS INSIDE ROUND(), WHICH DID NOT WORK.
/*
if (playerChoice === "rock", cChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    
}  else if (playerChoice === "rock", cChoice === "paper") {
    console.log("You lose! Paper beats rock!");

} else if (playerChoice === "paper", cChoice === "scissors") {
    console.log("You lose! Scissors beats paper!");

} else if (playerChoice === "paper", cChoice === "rock") {
    console.log("You win! Paper beats rock!");

} else if (playerChoice === "scissors", cChoice === "rock") {
    console.log("You lose! Rock beats scissors!");

} else if (playerChoice === "scissors",cChoice === "paper") {
    console.log("You win! Scissors beats paper!");

}  else if (playerChoice === "rock", cChoice === "paper") {
    console.log("You lose! Paper beats rock!");

} else if (playerChoice === cChoice) {
    console.log("It's a tie! Rematch if you please!");
}
}
*/

