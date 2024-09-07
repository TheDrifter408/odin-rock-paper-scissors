let computerScore = 0;
let humanScore = 0;

let mainElement = document.querySelector("#main");
// Creating the three choices
let rock = document.createElement('button');
let paper = document.createElement('button');
let scissors = document.createElement('button');
// Crating event listeners for the buttons
rock.addEventListener('click',playRound('rock',getComputerChoice));
paper.addEventListener('click',playRound('paper',getComputerChoice));
scissors.addEventListener('click',playRound('scissors',getComputerChoice));


function getComputerChoice(){
    const choice = {
        1:"rock",
        2:"paper",
        3:"scissors"
    }
    let number = Math.floor((Math.random() * 3) + 1);
    return choice[number];
}

function getHumanChoice(){
    let input = prompt("Please Enter Rock,Paper or Scissors:")
    return input;
}


function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human === "paper" && computer === "rock"){
        humanScore++;
        console.log("You Win! Paper beats Rock");
    } else if( human === "paper" && computer === "scissors" ){
        computerScore++;
        console.log("You Lose! Scissor beats Paper");

    } else if ( human === "rock" && computer === "paper" ){
        computerScore++;
        console.log("You Lose! Paper beats rock")
    } else if( human === "rock" && computer === "scissors"){
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    } else if( human === "scissors" && computer === "rock"){
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    } else if(human === "scissors" && computer === "paper"){
        humanScore++;
        console.log("You Win! Scissors beat Paper");
    } else if(  human === computer ) {
        console.log("Its a Draw!");
    } 
}

playGame();
