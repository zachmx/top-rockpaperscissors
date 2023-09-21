
function computerChoice(min, max){

    let choice = Math.floor(Math.random() * (max - min) + min)

    return choice == 1 ? 'rock'
        : choice == 2 ? 'paper'
        : choice == 3 ? 'scissors'
        : "something broke lol";

}

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

function printResults(inputMatchResult) {
    if (inputMatchResult == "win") {
        console.log("You won this Round!")
        playerWins++;
    } else if (inputMatchResult == "loss") {
        console.log("The computer won this Round!")
        computerWins++;
    } else if (inputMatchResult == "tie") {
        console.log("You tied this Round!")
    }

    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
}

function createPlayerOptions(){

    var playerWins = 0;
    var computerWins = 0;
    var gameOver = false;

    const playersZone = document.getElementById('userchoice')

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'rock';
    rockBtn.classList = 'player-button';
    rockBtn.id ='rock';

    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'paper';
    paperBtn.classList = 'player-button';
    paperBtn.id ='paper';

    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'scissors';
    scissorsBtn.classList = 'player-button';
    scissorsBtn.id ='scissors';


    startButton.remove();

    playersZone.appendChild(rockBtn);
    playersZone.appendChild(paperBtn);
    playersZone.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', rockSelection = () => {

        let playerChoice = 'rock';
        let matchResult = (playRound(playerChoice, computerChoice(1, 4)));

        printResults(matchResult);
        
    });

    paperBtn.addEventListener('click', rockSelection = () => {
        let playerChoice = 'paper';
        console.log(playRound(playerChoice, computerChoice(1, 4)));
    });

    scissorsBtn.addEventListener('click', rockSelection = () => {
        let playerChoice = 'scissors';
        console.log(playRound(playerChoice, computerChoice(1, 4)));
    });


    
}

function createScoreBoard(){
}
function game() {

    createPlayerOptions();

    createScoreBoard();




    //while (gameOver == false) {


    //    let matchResult = undefined;
//
//
//
    //    if (playerWins == 5 || computerWins == 5) {
//
    //        let winner; 
//
    //        if (playerWins == 5) {
    //            let winner = "Human player";
    //            console.log("The Game is Over. The " + winner + " wins the game!!" )
    //            var gameOver = true;
    //        } else if (computerWins == 5) {
    //            let winner = "Computer"
    //            console.log("The Game is Over. The " + winner + " wins the game!!" )
    //            var gameOver = true;
//
    //        }
    //    }
    //}
}

startButton = document.getElementById('startgame');

console.log(startButton);


startButton.addEventListener('click', beginGame = () => 
    game()
    );


