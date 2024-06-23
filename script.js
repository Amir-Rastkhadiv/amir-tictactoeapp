let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
    gameBoard.push('');
}

// Add event listeners to cells
for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.addEventListener('click', () => {
        if (!gameOver && gameBoard[i] === '') {
            gameBoard[i] = currentPlayer;
            cell.textContent = currentPlayer;
            checkGameStatus();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
}

// Check game status
function checkGameStatus() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        let cell1 = gameBoard[combination[0]];
        let cell2 = gameBoard[combination[1]];
        let cell3 = gameBoard[combination[2]];

        if (cell1 !== '' && cell1 === cell2 && cell2 === cell3) {
            gameOver = true;
            showResult(cell1);
            break;
        }
    }

    if (!gameOver && gameBoard.every(cell => cell !== '')) {
        showResult('Draw');
    }
}

// Show result
function showResult(winner) {
    let resultMessage = winner === 'Draw' ? 'It\'s a draw!' : `Player ${winner} wins!`;
    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('result-screen').style.display = 'block';
}

// Reset game
document.getElementById('reset-button').addEventListener('click', () => {
    gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard.push('');
    }
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('result-screen').style.display = 'none';
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById(`cell-${i}`);
        cell.textContent = '';
    }
});

document.getElementById('play-again-button').addEventListener('click', () => {
    gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard.push('');
    }
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('result-screen').style.display = 'none';
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById(`cell-${i}`);
        cell.textContent = '';
    }
});