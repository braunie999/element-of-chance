function exampleRock() {
  console.log("you clicked rock");
}

function examplePaper(event) {
  console.log(event);
}

const moves = ["rock", "paper", "scissors", "lizard", "spock"];
let wins = 0;
let losses = 0;
let ties = 0;
const maxTries = 5;
let tries = 0;

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
            <div id="player">User<div>
            <div id="computer">Computer<div> 
            <span>Wins: 0</span>
            <span>Losses: 0</span>
            <span>Ties: 0</span>
        </div>
        <button id="classic-game-back-to-menu">Back</button>
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

let mainContainer = document.getElementById("main-container");

function insertClassicGame() {
  mainContainer.innerHTML = classicGame;
  let classicPaper = document.getElementById("classic-paper");
  classicPaper.addEventListener("click", examplePaper);
  let classicRock = document.getElementById("classic-rock");
  classicRock.addEventListener("click", exampleRock);
}

function insertPlayModern() {}

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
  let instructionsBackBtn = document.getElementById("instructions-back-to-menu");
  instructionsBackBtn.addEventListener("click", insertMenu);
}

function getMenuButtons() {
  let playClassic = document.getElementById("play-classic");
  playClassic.addEventListener("click", insertClassicGame);
  let playModern = document.getElementById("play-modern");
  playModern.addEventListener("click", insertPlayModern);
  let instructions = document.getElementById("instructions");
  instructions.addEventListener("click", insertHowToPlay);
}

getMenuButtons();
