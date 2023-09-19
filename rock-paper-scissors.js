
function computerChoice(min, max){

    let choice = Math.floor(Math.random() * (max - min) + min)

    return choice == 1 ? 'rock'
        : choice == 2 ? 'paper'
        : choice == 3 ? 'scissors'
        : "It's Rock, Paper, Scissors... Pick One!";

}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');



rock.addEventListener('click', (e)=> {
    let playerChoice = 'rock';
    console.log(playRound(playerChoice, computerChoice(1, 4)));
    } )

paper.addEventListener('click', (e)=> {
    const playerChoice = 'paper';
    console.log(playRound(playerChoice, computerChoice(1, 4)));

    } )

scissors.addEventListener('click', (e)=> {
    const playerChoice = 'scissors';
    console.log(playRound(playerChoice, computerChoice(1, 4)));
    } )





function playRound(playerChoice, computerChoice) {

        if (playerChoice == 'rock') {
                switch (computerChoice){
                    case 'paper':
                        return "loss"
                        break;
                    case 'scissors':
                        return "win"
                        break;
                    case "rock": 
                        return "tie"
                        } 
            } else if (playerChoice == "paper") {
                switch (computerChoice){
                    case 'scissors':
                        return "loss"
                        break;
                    case 'rock':
                        return "win"
                        break;
                    case "paper": 
                        return "tie"
                        } 
            } else if (playerChoice == "scissors"){
                switch (computerChoice){
                    case 'Rock':
                        return "loss"
                        break;
                    case 'scissors':
                        return "tie"
                        break;
                    case "paper": 
                        return "win"
                        }
            } else {
                alert("Not sure that's an appropriate choice for Rock, Paper, Scissors");
            }
} 

function game() {

    let playerWins = 0;
    let computerWins = 0;
    var gameOver = false;


    while (gameOver == false) {


        let matchResult = playRound(playerChoice(), computerChoice(1, 4));

        if (matchResult == "win") {
            console.log("You won this Round!")
            playerWins++;
        } else if (matchResult == "loss") {
            console.log("The computer won this Round!")
            computerWins++;
        } else if (matchResult == "tie") {
            console.log("You tied this Round!")
        }

        console.log("Player wins: " + playerWins);
        console.log("Computer wins: " + computerWins);

        //if (playerWins == 5 || computerWins == 5) {
//
        //    let winner; 
//
        //    if (playerWins == 5) {
        //        let winner = "Human player";
        //        console.log("The Game is Over. The " + winner + " wins the game!!" )
        //        var gameOver = true;
        //    } else if (computerWins == 5) {
        //        let winner = "Computer"
        //        console.log("The Game is Over. The " + winner + " wins the game!!" )
        //        var gameOver = true;
//
        //    }
        //}
    }
}






