
const statusDisplay = document.querySelector('.gamestatus');
gameActive = true;
currentPlayer = "player1";
board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} won!`;
const drawMessage = () => `Draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const winningConditions = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    [14, 22, 30, 38],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [3, 11, 19, 27],
    [20, 26, 32, 38],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36]
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [3, 9, 15, 21]
]


let grid = document.querySelectorAll(".cell")

grid.forEach((circle) => {
    circle.addEventListener(("click"), () => {
        boxClicked(e)
    })
})

const Player_1 = "Player-1"
const Player_2 = "Player-2"

function boxClicked(e) {
    const id = e.target.id
    if (board[id] === "") {
        board[id] = currentPlayerTurn
        e.target.innerText = currentPlayerTurn
        currentPlayerTurn = currentPlayerTurn === "player1" ? "player2" : "player1";
    }
    if (e.target.innerText == "player1") {
        currentPlayerTurn.innerText = "Player 1 Turn"
    }
    else if ((e.target.innerText = "player2")) {
        currentPlayerTurn.innerText = "Player 2 Turn"
    }

}









// statusDisplay.innerHTML = currentPlayerTurn();
// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// function PlayerChange() {
//     currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
//     statusDisplay.innerHTML = currentPlayerTurn();
// }










