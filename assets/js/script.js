"use strict";

// Globally needed variables 
let optionsClassic = ["rock", "paper", "scissors"];  
let optionsModern = ["rock", "paper", "scissors", "lizard", "spock"];  
let gameMode = "";
let prevPlayerChoice = "";
let prevComputerChoice = "";
let prevResult = "";
let wins = 0;
let losses = 0;
let draws = 0;
let maxTries = 5;  
let currentTries = 0;

// Functions neede by more than one screen 

function selectGameModePlayClassic(){
  gameMode = "classicGame";
  launchClassicGame();
}

function selectGameModePlayModern(){
  gameMode = "modernGame";
  launchModernGame();
}

function launchGame(){
  if (gameMode === "classicGame"){
    launchClassicGame();
  }else if (gameMode === "modernGame");
    launchModernGame();
}

// Main-container housing menu options
let mainContainer = document.getElementById("main-container");

// Main container menu buttons
function insertMenu() {
  mainContainer.innerHTML = ` <div id="menu">
            <button id="play-classic">Play Classic</button>
            <button id="play-modern">Play Modern</button>
            <button id="instructions">How to Play</button>
        </div>`;
  getMenuButtons();
}

// Event listners for menu buttons
function getMenuButtons() {
  let playClassic = document.getElementById("play-classic");
  playClassic.addEventListener("click", insertClassicGame);
  let playModern = document.getElementById("play-modern");
  playModern.addEventListener("click", insertModernGame);
  let instructions = document.getElementById("instructions");
  instructions.addEventListener("click", insertHowToPlay);
}

getMenuButtons();

// Function button and Event listners for How to Play 
function insertHowToPlay() {
  mainContainer.innerHTML = gameRules;
  let instructionsBackBtn = document.getElementById("instructions-back-to-menu");
  instructionsBackBtn.addEventListener("click", insertMenu);
}

let gameRules = `
<div class="game-rules" id="game-rules">
        <h3>How to play:</h3>
        <h4>Classic Mode:</h4>
        <p>The winner is determined based on the following interactions:<br>
            Rock crushes Scissors (Rock wins)
            <br>
            Scissors cuts Paper (Scissors wins)
            <br>
            Paper covers Rock (Paper wins)
            <br>
            Draw: If both players choose the same gesture, it results in a tie, and the game can be played again.
        </p>
        <h4>Modern mode:</h4>
        <p>This mode is an expansion on the classic game Rock, Paper, Scissors,<br>
            with the additional hand signs of Lizard (resembling a hand puppet),<br>
            and Spock (the Vulcan Salute).
            <br>
            Scissors cuts Paper
            <br>
            Paper covers Rock
            <br>
            Rock crushes Lizard
            <br>
            Lizard poisons Spock
            <br>
            Spock smashes Scissors
            <br>
            Scissors decapitates Lizard
            <br>
            Lizard eats Paper
            <br>
            Paper disproves Spock
            <br>
            Spock vaporizes Rock
            <br>
            Rock crushes Scissors
        </p>
        <button id="instructions-back-to-menu">Back</button>
    </div>
`;

// Function button and Event listners for Classic Game 
function insertClassicGame() {
  mainContainer.innerHTML = classicGame;
  let classicPaper = document.getElementById("classic-paper");
  classicPaper.addEventListener("click", classicPlayerChoice);
  let classicRock = document.getElementById("classic-rock");
  classicRock.addEventListener("click", classicPlayerChoice);
  let classicScissors = document.getElementById("classic-scissors");
  classicScissors.addEventListener("click", classicPlayerChoice);
  let playClassicBackBtn = document.getElementById("classic-mode-back-to-menu");
  playClassicBackBtn.addEventListener("click", insertMenu);
}

let classicGame = `
<!-- Classic game mode container -->
    <div class="classic-mode" id="classic-mode">

        <h2>Rock Paper Scissors</h2>

        <p>
        <h3>Choose your move:</h3>
        </p>
        
        <div class="options" id="options">
             <button id="classic-rock">
                <img src="assets/images/rock.png" alt="rock-emoji">
            </button>
            <button id="classic-paper">
                <img src="assets/images/paper.png" alt="hand-emoji">
            </button>
            <button id="classic-scissors">
                <img src="assets/images/scissors.png" alt="peace-sign-emoji">
            </button>
        </div>

        <div id="results"></div>
        <div id="scoreboard">
            <div id="player">User</div>
             <div id="computer">Comp</div>    
            <span>Wins: <span id="wins">0</span></span>
            <span>Losses: <span id="losses">0</span></span>
            <span>Draws: <span id="draws">0</span></span>
        </div>
        <button id="classic-mode-back-to-menu">Back</button>
    </div>
`;

// Function button and Event listners for Modern Game
function insertModernGame() {
  mainContainer.innerHTML = modernGame;
  let modernPaper = document.getElementById("m-paper");
  modernPaper.addEventListener("click", modernPlayerChoice);
  let modernRock = document.getElementById("m-rock");
  modernRock.addEventListener("click", modernPlayerChoice);
  let modernScissors = document.getElementById("m-scissors");
  modernScissors.addEventListener("click", modernPlayerChoice);
  let modernLizard = document.getElementById("m-lizard");
  modernLizard.addEventListener("click", modernPlayerChoice);
  let modernSpock = document.getElementById("m-spock");
  modernSpock.addEventListener("click", modernPlayerChoice);
  let playModernBackBtn = document.getElementById("modern-mode-back-to-menu");
  playModernBackBtn.addEventListener("click", insertMenu);
}

let modernGame = `
<!-- Modern game mode container -->
     <div class="modern-mode" id="modern-mode">

        <h2>Rock Paper Scissors Lizard Spock</h2>

        <p>
        <h3>Choose your move:</h3>
        </p>

        <div class="options" id="options">
           <button id="m-rock">
                <img src="assets/images/rock.png" alt="rock-emoji">
            </button>
            <button id="m-paper">
                <img src="assets/images/paper.png" alt="hand-emoji">
            </button>
            <button id="m-scissors">
                <img src="assets/images/scissors.png" alt="peace-sign-emoji">
            </button>
            <button id="m-lizard">
                <img src="assets/images/lizard.png" alt="puppet hand-emoji">
            </button>
            <button id="m-spock">
                <img src="assets/images/spock-hand.png" alt="vulcan salute-emoji">
            </button>
        </div>

        <div id="results"></div>
        <div id="scoreboard">
            <div id="player">User<div>
             <div id="computer">Comp</div>    
            <span>Wins: <span id="wins">0</span></span>
            <span>Losses: <span id="losses">0</span></span>
            <span>Draws: <span id="draws">0</span></span>
        </div>
        <button id="modern-mode-back-to-menu">Back</button>
    </div> 
`;

//Classic game mode function variables
function cRock() {
  classicGame(rock);
}
function cPaper() {
  classicGame(paper);
}
function cScissors() {
  classicGame(scissors);
}
// shows what the player clicked on for Classic Mode
function classicPlayerChoice(event) {
  let playerChoice = event.currentTarget.id.slice(8);
  let computerChoice = classicComputerChoice();
  classicWinner(playerChoice, computerChoice);
}

// Computers choice for Classic Mode

function classicComputerChoice() {
  let optionsClassic = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * optionsClassic.length);
  return optionsClassic[randomChoice];
}

// Determines the winner of Classic game mode and Game logic 

function classicWinner(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice == computerChoice) {
    result = "draw";
    updateScoreboard(playerChoice, computerChoice, result);
    return;
  }
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      result = "player";
      updateScoreboard(playerChoice, computerChoice, result);
      return;
    
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      result = "computer";
      updateScoreboard(playerChoice, computerChoice, result);
      return;
    
  }
  result = "computer";
  updateScoreboard(playerChoice, computerChoice, result);
}

// Function updating the scoreboard in Classic game Mode

function updateScoreboard(playerChoice, computerChoice, result) {
  let player = document.getElementById("player");
  player.innerText ="User: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  let computer = document.getElementById("computer");
  computer.innerText ="Comp: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  // Update wins or losses based on the result
  if (result === "player") {
    let wins = document.getElementById("wins");
    let currentWinsValue = parseInt(wins.innerText);
    wins.innerText = currentWinsValue + 1;
  } else if (result === "computer") {
    let losses = document.getElementById("losses");
    let currentLossesValue = parseInt(losses.innerText);
    losses.innerText = currentLossesValue + 1;
  } else {
    let draws = document.getElementById("draws");
    let currentDrawsValue = parseInt(draws.innerText);
    draws.innerText = currentDrawsValue +1;
  }
  updateResults(playerChoice, computerChoice, result);
}

function updateResults(playerChoice, computerChoice, result) { 
  if (result === "player") {
    result = "You Win"
  } else if (result === "computer") {
    result = "You Lose"
  } else {
    result = "It's a Draw"
  }
  let resultsDiv = document.getElementById("results")
  resultsDiv.innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;  
}  

//Modern game mode functions variables
function mRock() {
  modernGame(mRock);
}
function mPaper() {
  modernGame(paper);
}
function mScissors() {
  modernGame(scissors);
}
function mLizard() {
  modernGame(lizard);
}
function mSpock() {
  modernGame(spock);
}

// shows what the player clicked on for Modern Mode
function modernPlayerChoice(event) {
  let playerChoice = event.currentTarget.id.slice(2);
  let computerChoice = modernComputerChoice();
  modernWinner(playerChoice, computerChoice);
}

// Computers choice for Modern Mode

function modernComputerChoice() {
  let optionsModern = ["rock", "paper", "scissors", "lizard", "spock"];
  let randomChoice = Math.floor(Math.random() * optionsModern.length);
  return optionsModern[randomChoice];
}

// Determines the winner of Modern game mode and Game logic 

function modernWinner(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice == computerChoice) {
    result = "draw";
    updateScoreboard(playerChoice, computerChoice, result);
    return;
  }
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    case "rocklizard":
    case "paperspock":
    case "scissorslizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockscissors":
    case "spockrock":
      result = "player";
      updateScoreboard(playerChoice, computerChoice, result);
      return;
    
    case 'scissorsrock':
    case 'rockpaper':
    case 'rockspock':
    case 'paperscissors':
    case 'paperlizard':
    case 'scissorsspock':
    case 'lizardrock':
    case 'lizardscissors':
    case 'spocklizard':
    case 'spockpaper':
      result = "computer";
      updateScoreboard(playerChoice, computerChoice, result);
      return;
  }
  result = "computer";
  updateScoreboard(playerChoice, computerChoice, result);
}
