// Globally needed variables
let optionsClassic = ["rock", "paper", "scissors"];
let optionsModern = ["rock", "paper", "scissors", "lizard", "spock"];
let wins = 0;
let losses = 0;
let draws = 0;
let maxTries = 5;
let currentTries = 0;

// Main-container housing menu options
let mainContainer = document.getElementById("main-container");

// Getting Main container menu buttons
function insertMenu() {
  mainContainer.innerHTML = ` <div id="menu">
            <button id="play-classic">Play Classic</button>
            <button id="play-modern">Play Modern</button>
            <button id="instructions">How to Play</button>
        </div>`;
  getMenuButtons();
}

// Event listners for clicking on menu buttons
function getMenuButtons() {
  let playClassic = document.getElementById("play-classic");
  playClassic.addEventListener("click", insertClassicGame);
  let playModern = document.getElementById("play-modern");
  playModern.addEventListener("click", insertModernGame);
  let instructions = document.getElementById("instructions");
  instructions.addEventListener("click", insertHowToPlay);
}

// Calling the get buttons functions
getMenuButtons();

// Function button and Event listners for How to Play
function insertHowToPlay() {
  mainContainer.innerHTML = gameRules;
  let instructionsBackBtn = document.getElementById("instructions-back-to-menu");
  instructionsBackBtn.addEventListener("click", insertMenu);
}

// Inner HTML code for the Rules of the game menu button
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

// Function button to start the Classic Game mode and Event listners for Classic Game choices
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

// Creates the HTML for Classic game mode
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
        <div id="reset-container"></div>
        <button id="classic-mode-back-to-menu">Back</button>
    </div>
`;

// Function button to start the Modern Game mode and Event listners for Modern Game choices
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

// Creates the HTML for Modern game mode
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
            <div id="player">User</div>
             <div id="computer">Comp</div>    
            <span>Wins: <span id="wins">0</span></span>
            <span>Losses: <span id="losses">0</span></span>
            <span>Draws: <span id="draws">0</span></span>
        </div>
        <div id="reset-container"></div>
        <button id="modern-mode-back-to-menu">Back</button>
    </div> 
`;

//Classic game mode function variables
function cRock() {
  classicGame(cRock);
}
function cPaper() {
  classicGame(cPaper);
}
function cScissors() {
  classicGame(cScissors);
}

// Shows what the player clicked on for Classic Mode and what the computer choose at random 
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

// Determines the winner of Classic Game mode and Game logic
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

// Function to reset the game when the max tries have been reached
function resetGame() {
  currentTries = 0;
  wins = 0;
  losses = 0;
  draws = 0;

  document.getElementById("wins").innerText = "0";
  document.getElementById("losses").innerText = "0";
  document.getElementById("draws").innerText = "0";
  document.getElementById("player").innerText = "user";
  document.getElementById("computer").innerText = "comp";
  document.getElementById("results").innerHTML = "";
  document.getElementById("reset-container").innerHTML = "";

 // Disabling the option buttons when max tries are reached only enabled again when reset button is clicked
  let buttons = document.querySelectorAll("#options button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Function button to display reset button when max tries have been reached
function displayResetBtn() {
  let resultsDiv = document.getElementById("reset-container");
  resultsDiv.innerHTML += `<button id="reset-game">Reset Game</button>`;//adding button without removing other innerHTML code and functionality
  let resetButton = document.getElementById("reset-game");
  resetButton.addEventListener("click", resetGame);
}

function disableGameButtons() {
  let buttons = document.querySelectorAll("#options button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function checkTries() {
  if (currentTries >= maxTries) {
    displayResetBtn();
    disableGameButtons();
  }
}

// Function updating the scoreboard in Classic and Modern game Mode
function updateScoreboard(playerChoice, computerChoice, result) {
  let player = document.getElementById("player");
  player.innerText =
    "User: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  let computer = document.getElementById("computer");
  computer.innerText =
    "Comp: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

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
    draws.innerText = currentDrawsValue + 1;
  }

  currentTries++;
  checkTries();

  updateResults(playerChoice, computerChoice, result);
}

// Function that updates the results of bot Computer and player
function updateResults(playerChoice, computerChoice, result) {
  if (result === "player") {
    result = "You Win";
  } else if (result === "computer") {
    result = "You Lose";
  } else {
    result = "It's a Draw";
  }
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

//Modern game mode functions variables
function mRock() {
  modernGame(mRock);
}
function mPaper() {
  modernGame(mPaper);
}
function mScissors() {
  modernGame(mScissors);
}
function mLizard() {
  modernGame(mLizard);
}
function mSpock() {
  modernGame(mSpock);
}

// Shows what the player clicked on for Modern Mode
function modernPlayerChoice(event) {
  let playerChoice = event.currentTarget.id.slice(2);
  let computerChoice = modernComputerChoice();
  modernWinner(playerChoice, computerChoice);
}

// Computers choice for Modern Mode generated at random
function modernComputerChoice() {
  let optionsModern = ["rock", "paper", "scissors", "lizard", "spock"];
  let randomChoice = Math.floor(Math.random() * optionsModern.length);
  return optionsModern[randomChoice];
}

// Determines the winner of Modern Game mode and Game logic
function modernWinner(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice == computerChoice) {
    result = "draw";
    updateScoreboard(playerChoice, computerChoice, result);
    return;
  }
  // Switch case functions 
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

    case "scissorsrock":
    case "rockpaper":
    case "rockspock":
    case "paperscissors":
    case "paperlizard":
    case "scissorsspock":
    case "lizardrock":
    case "lizardscissors":
    case "spocklizard":
    case "spockpaper":
      result = "computer";
      updateScoreboard(playerChoice, computerChoice, result);
      return;
  }
}
