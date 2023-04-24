
const choices = ["rock", "paper", "scissors"];
let pChoice = prompt ("Please type either Rock, Paper, or Scissors.");
let playerChoice = pChoice.toLowerCase();


let computerChoice = function () {
return cChoice = choices[Math.floor(Math.random()*choices.length)];
}


function Round (playerChoice, cChoice) {



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

computerChoice();
Round(); 