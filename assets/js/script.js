const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        let wins = 0, losses = 0, ties = 0;
        const maxTries = 5;
        let tries = 0;

        function play(playerMove) {
            if (tries >= maxTries) {
                document.getElementById('result').innerText = "Game Over! You've reached the maximum number of tries.";
                return;
            }

            const computerMove = moves[Math.floor(Math.random() * moves.length)];
            const result = determineOutcome(playerMove, computerMove);

            if (result === 'win') {
                wins++;
                document.getElementById('result').innerText = `You chose ${playerMove}, computer chose ${computerMove}. You win!`;
            } else if (result === 'lose') {
                losses++;
                document.getElementById('result').innerText = `You chose ${playerMove}, computer chose ${computerMove}. You lose!`;
            } else {
                ties++;
                document.getElementById('result').innerText = `You chose ${playerMove}, computer chose ${computerMove}. It's a tie!`;
            }

            tries++;
            updateScore();
        }

        function determineOutcome(player, computer) {
            const winConditions = {
                rock: ['scissors', 'lizard'],
                paper: ['rock', 'spock'],
                scissors: ['paper', 'lizard'],
                lizard: ['spock', 'paper'],
                spock: ['scissors', 'rock']
            };

            if (player === computer) {
                return 'tie';
            } else if (winConditions[player].includes(computer)) {
                return 'win';
            } else {
                return 'lose';
            }
        }

        function updateScore() {
            document.getElementById('score').innerText = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
        }
