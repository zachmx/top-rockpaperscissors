
function computerChoice(min, max){

    let choice = Math.floor(Math.random() * (max - min) + min)

    return choice == 1 ? 'rock'
        : choice == 2 ? 'paper'
        : choice == 3 ? 'scissors'
        : "It's Rock, Paper, Scissors... Pick One!";

}

function playerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?", " ");
    let choiceLower = choice.toLowerCase();
    return choiceLower;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice == 'rock' && computerChoice == 'paper'){
        alert("Computer picked Paper, You Lost!");
    } else if (playerChoice == 'rock' && computerChoice == "scissors") {
        alert ("Computer picked Scissors.  You win!");
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        alert("Computer picked Rock.  You tied!");
    }
}

playRound(playerChoice(), computerChoice(1, 4));