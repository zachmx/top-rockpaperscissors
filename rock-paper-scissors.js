
function getComputerChoice(min, max){

    let choice = Math.floor(Math.random() * (max - min) + min)

    return choice == 1 ? 'Rock'
        : choice == 2 ? 'Paper'
        : choice == 3 ? 'Scissors'
        : "It's Rock, Paper, Scissors... Pick One!";

}

console.log(getComputerChoice(1, 4));