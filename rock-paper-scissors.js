
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
                    case 'rock':
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

function createPlayerOptions(){

    let playerWins = 0;
    let computerWins = 0;
    let gameOver = false;

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


}

function createScoreBoard(){

    let compScore = 0;
    let playScore = 0;

    let scoreBoard = document.createElement('div');
    scoreBoard.id = 'scoreboard';

    let resultsHead = document.createElement('h3');
    resultsHead.id = 'results-head';
    resultsHead.innerText = 'Match Results';
    resultsHead.style.textDecoration = "underline";

    let computerScore = document.createElement('p');
    computerScore.innerText = "Computer Wins: "

    let compScoreCount = document.createElement('p');
    compScoreCount.innerText = compScore;
    compScoreCount.id ="comp-counter";

    let playerScore = document.createElement('p');
    playerScore.innerText = "Player Wins: "

    let playScoreCount = document.createElement('p');
    playScoreCount.innerText = playScore;
    playScoreCount.id = "player-counter";


    document.body.appendChild(scoreBoard);

    scoreBoard.appendChild(resultsHead);

    scoreBoard.appendChild(computerScore);

    computerScore.appendChild(compScoreCount);
    
    scoreBoard.appendChild(playerScore);
    playerScore.appendChild(playScoreCount);

}

function game() {

    createScoreBoard();

    createPlayerOptions();

    let rockBtn = document.getElementById('rock');
    let paperBtn = document.getElementById('paper');
    let scissorsBtn = document.getElementById('scissors');

    let compCounter = document.getElementById('comp-counter');
    let playerCounter = document.getElementById('player-counter');

    let compScore = compCounter.innerText;
    let playerScore = playerCounter.innerText;

    
    rockBtn.addEventListener('click', rockSelection = () => {

            let playerChoice = 'rock';
            let roundResult = (playRound(playerChoice, computerChoice(1, 4)));
            
            if (roundResult == 'win'){
                playerCounter.innerText = playerScore++;               
            } else if (roundResult == 'loss'){
                compCounter.innerText = compScore++;
            } else if (roundResult == 'tie'){
                console.log("it's a tie");
            }
            
        });

    paperBtn.addEventListener('click', paperSelection = () => {
            let playerChoice = 'paper';
            let roundResult = playRound(playerChoice, computerChoice(1, 4));
            
            if (roundResult == 'win'){
                playerCounter.innerText = playerScore++;               
            } else if (roundResult == 'loss'){
                compCounter.innerText = compScore++;
            } else if (roundResult == 'tie'){
                console.log("it's a tie");
            }
        });

    scissorsBtn.addEventListener('click', scissorsSelection = () => {
            let playerChoice = 'scissors';
            let roundResult = playRound(playerChoice, computerChoice(1, 4));
            if (roundResult == 'win'){
                playerCounter.innerText = playerScore++;               
            } else if (roundResult == 'loss'){
                compCounter.innerText = compScore++;
            } else if (roundResult == 'tie'){
                console.log("it's a tie");
            }
        });


   // if (playerWins == 5 || computerWins == 5) {
//
   //     let winner; 
//
   //     if (playerWins == 5) {
   //         let winner = "Human player";
   //         console.log("The Game is Over. The " + winner + " wins the game!!" )
   //         var gameOver = true;
   //     } else if (computerWins == 5) {
   //         let winner = "Computer"
   //         console.log("The Game is Over. The " + winner + " wins the game!!" )
   //         var gameOver = true;
//
   //     }
   // }
    
}




startButton = document.getElementById('startgame');


startButton.addEventListener('click', beginGame = () => 
    game()
    );


