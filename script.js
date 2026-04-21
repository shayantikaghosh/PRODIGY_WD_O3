const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");

let mode = "";
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

// Start Game
function startGame(selectedMode) {
    mode = selectedMode;

    menuScreen.style.display = "none";
    gameScreen.style.display = "block";

    restartGame();
}

// Back to menu
function goBack() {
    gameScreen.style.display = "none";
    menuScreen.style.display = "block";
}

// Handle Click
function handleClick(e) {
    const index = e.target.getAttribute("data-index");

    if (gameState[index] !== "" || !gameActive) return;

    makeMove(index, currentPlayer);

    if (mode === "ai" && gameActive) {
        setTimeout(aiMove, 500);
    }
}

// Make Move
function makeMove(index, player) {
    gameState[index] = player;
    cells[index].textContent = player;

    checkResult();
}

// AI Move (random)
function aiMove() {
    let empty = gameState
        .map((v,i) => v === "" ? i : null)
        .filter(v => v !== null);

    if (empty.length === 0) return;

    let rand = empty[Math.floor(Math.random() * empty.length)];
    makeMove(rand, "O");
}

// Check Result
function checkResult() {
    let won = false;

    for (let pattern of winPatterns) {
        let [a,b,c] = pattern;

        if (
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ) {
            won = true;
            break;
        }
    }

    if (won) {
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        statusText.textContent = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Restart
function restartGame() {
    gameState = ["","","","","","","","",""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's Turn";

    cells.forEach(cell => cell.textContent = "");
}

// Events
cells.forEach(cell => cell.addEventListener("click", handleClick));
restartBtn.addEventListener("click", restartGame);