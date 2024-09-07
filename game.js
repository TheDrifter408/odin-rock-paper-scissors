let computerScore = 0;
let humanScore = 0;

const mainElement = document.querySelector("#main");

const container = document.createElement('div');
const ctnHeading = document.createElement('h1');
const roundResults = document.createElement('h3');
const cntScore = document.createElement('div');
const humanScoreEl = document.createElement('span');
const computerScoreEl = document.createElement('span');
ctnHeading.textContent = 'Your Choices';
const resultsParagraph = document.createElement('p');
resultsParagraph.textContent = '';
// Creating the three choices
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
// Crating event listeners for the buttons
rock.addEventListener('click',playRound('rock',getComputerChoice));
paper.addEventListener('click',playRound('paper',getComputerChoice));
scissors.addEventListener('click',playRound('scissors',getComputerChoice));

cntScore.appendChild(humanScoreEl);
cntScore.appendChild(computerScoreEl);

container.appendChild(ctnHeading);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

container.appendChild(roundResults);
container.appendChild(resultsParagraph);

mainElement.appendChild(container);

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
        humanScoreEl.textContent = humanScore;
    } else if( human === "paper" && computer === "scissors" ){
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if ( human === "rock" && computer === "paper" ){
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if( human === "rock" && computer === "scissors"){
        humanScore++;
        humanScoreEl.textContent = humanScore;
    } else if( human === "scissors" && computer === "rock"){
        computerScore++;
        computerScoreEl.textContent = computerScore;
    } else if(human === "scissors" && computer === "paper"){
        humanScore++;
        humanScoreEl.textContent = humanScore;
    } else if(  human === computer ) {
        roundResults.textContent = "It's a Draw!";
    } 
}
function playGame(){
    console.log("The Match results: ");
    if(humanScore === computerScore){
        resultsParagraph.textContent = "It's A Draw";
    } else if(humanScore > computerScore){
        resultsParagraph.textContent = "You won the match!";
    } else {
        resultsParagraph.textContent = "You lost :((";
    }
}
playGame();
