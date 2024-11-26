"use strict";

//Classic game mode function variables
function cRock() {
  console.log("you clicked rock");
}
function cPaper(event) {
  console.log(event);
}
function cScissors() {
  console.log("you clicked scissors");
}
// shows what the player clicked on
function classicPlayerChoice(event) {
  let playerChoice = event.target.id.slice(8);
  console.log(playerChoice);
  let computerChoice = classicComputerChoice();
  console.log(computerChoice);
  classicWinner(playerChoice, computerChoice);
}

// Computers choice

function classicComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
}

function classicWinner(playerChoice, computerChoice) {
  let result = ''
  if (playerChoice == computerChoice) {
    console.log("draw");
    result = "draw";
    updateScoreboard(playerChoice, computerChoice, result);
    return;
  }
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("player wins");
      result = "player"
      updateScoreboard(playerChoice, computerChoice, result)
      return;
  }
  console.log("computer wins");
  result = "computer"
  updateScoreboard(playerChoice, computerChoice, result);
}

// Funtion updating the scoreboard
function updateScoreboard(playerChoice, computerChoice, result) {
  let player = document.getElementById("player");
  player.innerText =
    "User: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  ;
  let computer = document.getElementById("computer");
  computer.innerText =
    "Computer: " +
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)
  ;
}


//Modern game mode functions variables
function mRock() {
  console.log("you clicked rock");
}
function mPaper(event) {
  console.log(event);
}
function mScissors() {
  console.log("you clicked scissors");
}
function mLizard(event) {
  console.log("you choose lizard");
}
function mSpock() {
  console.log("you choose spock");
}

let classicGame = `
<!-- Classic game mode container -->
    <div class="classic-mode" id="classic-mode">

        <h2>Rock Paper Scissors</h2>

        <p>
        <h3>Choose your move:</h3>
        </p>
        
        <div class="options" id="options">
            <button id="classic-rock">✊🏽</button>
            <button id="classic-paper">🤚🏽</button>
            <button id="classic-scissors">✌🏽</button>
        </div>

        <div id="results"></div>
        <div id="scoreboard">
            <div id="player">User</div>
            <div id="computer">Computer</div> 
            <span>Wins: 0</span>
            <span>Losses: 0</span>
            <span>Ties: 0</span>
        </div>
        <button id="classic-mode-back-to-menu">Back</button>
    </div>
`;

let modernGame = `
<!-- Modern game mode container -->
     <div class="modern-mode" id="modern-mode">

        <h2>Rock Paper Scissors Lizard Spock</h2>

        <p>
        <h3>Choose your move:</h3>
        </p>

        <div class="options" id="options">
            <button id="modern-rock">✊🏽</button>
            <button id="modern-paper">🤚🏽</button>
            <button id="modern-scissors">✌🏽</button>
            <button id="lizard">🤏🏽</button>
            <button id="spock">🖖🏽</button>
        </div>

        <div id="results"></div>
        <div id="scoreboard">
            <div id="player">User<div>
            <div id="computer">Computer<div>    
            <span>Wins: 0</span>
            <span>Losses: 0</span>
            <span>Ties: 0</span>
        </div>
        <button id="modern-mode-back-to-menu">Back</button>
    </div> 
`;

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

// Main-container housing menu options
let mainContainer = document.getElementById("main-container");

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

function insertModernGame() {
  mainContainer.innerHTML = modernGame;
  let modernPaper = document.getElementById("modern-paper");
  modernPaper.addEventListener("click", mPaper);
  let modernRock = document.getElementById("modern-rock");
  modernRock.addEventListener("click", mRock);
  let modernScissors = document.getElementById("modern-scissors");
  modernScissors.addEventListener("click", mScissors);
  let modernLizard = document.getElementById("lizard");
  modernLizard.addEventListener("click", mLizard);
  let modernSpock = document.getElementById("spock");
  modernSpock.addEventListener("click", mSpock);
  let playModernBackBtn = document.getElementById("modern-mode-back-to-menu");
  playModernBackBtn.addEventListener("click", insertMenu);
}

// Main container menu buttons
function insertMenu() {
  mainContainer.innerHTML = ` <div id="menu">
            <button id="play-classic">Play Classic</button>
            <button id="play-modern">Play Modern</button>
            <button id="instructions">How to Play</button>
        </div>`;
  getMenuButtons();
}

function insertHowToPlay() {
  mainContainer.innerHTML = gameRules;
  let instructionsBackBtn = document.getElementById(
    "instructions-back-to-menu"
  );
  instructionsBackBtn.addEventListener("click", insertMenu);
}

function getMenuButtons() {
  let playClassic = document.getElementById("play-classic");
  playClassic.addEventListener("click", insertClassicGame);
  let playModern = document.getElementById("play-modern");
  playModern.addEventListener("click", insertModernGame);
  let instructions = document.getElementById("instructions");
  instructions.addEventListener("click", insertHowToPlay);
}

getMenuButtons();
