let computerScore = 0;
let humanScore = 0;

const mainElement = document.querySelector("#main");
const container = document.createElement('div');
const ctnHeading = document.createElement('h1');
const roundResults = document.createElement('h3');
// The Results container
const cntScore = document.createElement('div');
// The Results Element
const humanScoreEl = document.createElement('p');
humanScoreEl.textContent = "Human: ";
humanScoreEl.style.fontSize = "18px";
humanScoreEl.style.fontWeight = "900";
const computerScoreEl = document.createElement('p');
computerScoreEl.textContent = "Computer: ";
computerScoreEl.style.fontSize = "18px";
computerScoreEl.style.fontWeight = "900";
ctnHeading.textContent = 'Your Choices';
const resultsParagraph = document.createElement('h2');
resultsParagraph.textContent = 'The Results:';
// Creating the three choices
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
// Crating event listeners for the buttons
rock.addEventListener('click',(e) => {
    playRound('rock',getComputerChoice());
});
paper.addEventListener('click',(e) => {
    playRound('paper',getComputerChoice());
});
scissors.addEventListener('click',(e) => {
    playRound('scissors',getComputerChoice());
});

cntScore.appendChild(humanScoreEl);
cntScore.appendChild(computerScoreEl);

container.appendChild(ctnHeading);
container.appendChild(cntScore);
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
    let human = humanChoice;
    let computer = computerChoice;
    console.log(human,computer);
    if(human === "paper" && computer === "rock"){
        humanScore++;   
        humanScoreEl.textContent = 'Human:' + humanScore;
    } else if( human === "paper" && computer === "scissors" ){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if ( human === "rock" && computer === "paper" ){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if( human === "rock" && computer === "scissors"){
        humanScore++;
        humanScoreEl.textContent = 'Human:' + humanScore;
    } else if( human === "scissors" && computer === "rock"){
        computerScore++;
        computerScoreEl.textContent = 'Computer:' + computerScore;
    } else if(human === "scissors" && computer === "paper"){
        humanScore++;
        humanScoreEl.textContent = 'Human:' + humanScore;
    } 
    if(humanScore === 5 && humanScore > computerScore){
        resultsParagraph.textContent = "You Won!";
    } else if(computerScore === 5 && computerScore > humanScore){
        resultsParagraph.textContent = "You Lost :(";
    } else {
        resultsParagraph.textContent = " It's A Draw :0";
    }
}

