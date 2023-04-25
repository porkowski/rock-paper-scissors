
const choices = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;


function Round () {
    let pChoice = prompt ("Please type either Rock, Paper, or Scissors.");
    let playerChoice = pChoice.toLowerCase();
    
    
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
    alert("It's a tie, rematch!");
    Round();
    break;

    
}


}





function game() {
    Round(); 
    Round(); 
    Round(); 
    Round();  
    Round(); 

    if (player>computer) {
        alert("Congrats, you win the game!"); 
    } else if (computer<player) {
        alert("Sorry, you lose the game!");
    }
}

game()





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

