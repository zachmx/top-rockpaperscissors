
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

        if (playerChoice == 'rock') {
                switch (computerChoice){
                    case 'paper':
                        alert("Computer picked Paper, You Lost");
                        break;
                    case 'scissors':
                        alert("Computer picked Scissors.  You Win!");
                        break;
                    case "rock": 
                        alert("Computer picked Rock. You tied!");
                        } 
            } else if (playerChoice == "paper") {
                switch (computerChoice){
                    case 'scissors':
                        alert("Computer picked Scissors, You Lost");
                        break;
                    case 'rock':
                        alert("Computer picked Rock.  You Win!");
                        break;
                    case "paper": 
                        alert("Computer picked Paper. You tied!");
                        } 
            } else if (playerChoice == "scissors"){
                switch (computerChoice){
                    case 'Rock':
                        alert("Computer picked Rock, You Lost");
                        break;
                    case 'scissors':
                        alert("Computer picked Scissors.  You tied!");
                        break;
                    case "paper": 
                        alert("Computer picked Paper. You Win!");
                        }
            } else {
                alert("Not sure that's an appropriate choice for Rock, Paper, Scissors")
            }
} 

playRound(playerChoice(), computerChoice(1, 4))   ;



/** && computerChoice == 'paper'){
    alert("Computer picked Paper, You Lost!");
} else if (playerChoice == 'rock' && computerChoice == "scissors") {
    alert ("Computer picked Scissors.  You win!");
} else if (playerChoice == 'rock' && computerChoice == 'rock') {
    alert("Computer picked Rock.  You tied!");
}
**/ 
