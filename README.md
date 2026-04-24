# PRODIGY_WD_03

Tic Tac Toe

A lightweight, responsive, and interactive Tic Tac Toe game built with HTML5, CSS3, and Vanilla JavaScript. This project features two distinct game modes: playing against a friend locally or challenging a randomized AI

🚀 FeaturesDual Game Modes:Human vs. Human: Play locally with a friend on the same device.Human vs. 

AI: Challenge a computer opponent (randomized move logic)

Dynamic UI: Seamless transition between the menu screen and the game board without page reloads.Game Logic:Automatic win detection for all 8 possible combinations.Draw/Tie detection when the board is full.Turn indicators to keep track of the current player.Responsive Design: A clean, centered grid layout that works across modern web browsers

🛠️ Technologies Used HTML: Semantic structure for the menu and game screens.CSS: Flexbox and CSS Grid for layout, including hover effects and styling.JavaScript: State management, DOM manipulation, and game logic

🎮 How to PlaySelect Mode: Choose "Play with Human" or "Play with AI" from the main menu.

Make a Move: Click on any empty cell in the 3*3  grid.Player 1 is always X.Player 2 (or AI) is always O.

Win Condition: Be the first to get three of your marks in a horizontal, vertical, or diagonal row.

Restart/Back: Use the "Restart" button to clear the current board, or the "Back" button to return to the mode selection screen.


📂 Project StructureBash├── index.html   # Main structure and UI containers
├── style.css    # Styling, grid layout, and button aesthetics
└── script.js     # Game state, AI logic, and win-checking algorithms


🧠 Key Logic HighlightsWin DetectionThe game checks the gameState array against a constant set of winPatterns:JavaScriptconst winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // Rows
    [0,3,6],[1,4,7],[2,5,8], // Columns
    [0,4,8],[2,4,6]           // Diagonals
];

AI Move GenerationIn AI mode, the computer identifies all indices in the gameState array that are currently empty, filters them into a new list, and selects one at random to ensure it never attempts an illegal move
