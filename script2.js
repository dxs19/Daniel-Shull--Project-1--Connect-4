let matrix = [ // go from top corner for indexing
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
]



console.log(matrix[2][1])

for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) { // row
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) { // column
        console.log(matrix[rowIndex][colIndex])
    }
    console.log("")
}











const statusDisplay = document.querySelector('.gamestatus');
let gameActive = true;
let currentPlayer = "player1";
let board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} won!`;
const drawMessage = () => `Draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
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
    [18, 24, 30, 36],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [3, 9, 15, 21]
]

// Winning Conditions
const winning = () => {
    let roundWon = false
    for (let i = 0; i < winningConditions.length; i++) {
        if (board[winningConditions[i][0]] === 'player1' &&
            board[winningConditions[i][1]] === 'player1' &&
            board[winningConditions[i][2]] === 'player1' &&
            board[winningConditions[i][3]] === 'player1'

        ) {
            statusDisplay.innerHTML = 'Player 1 Has Won the Game!'
            roundWon = true
            console.log(roundWon)
        }
        else if (board[winningConditions[i][0]] === 'player2' &&
            board[winningConditions[i][1]] === 'player2' &&
            board[winningConditions[i][2]] === 'player2' &&
            board[winningConditions[i][3]] === 'player2'

        ) {
            statusDisplay.innerHTML = 'Player 2 Has Won the Game!'
            roundWon = true
            console.log(roundWon)
        }
    }
    if (roundWon) {
        gameActive = false
        return
    }
}

// Event listner 
let grid = document.querySelectorAll(".cell")

grid.forEach((circle) => {
    circle.addEventListener(("click"), (e) => {
        boxClicked(e)
    })
})

// Function for Event Listner
function boxClicked(e) {
    const id = e.target.getAttribute("data-cell-index")
    if (board[id] === "") {
        board[id] = currentPlayer
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        // console.log(currentPlayer)
        if (currentPlayer === "player1") {
            e.target.style.backgroundColor = 'red'
            e.target.id = "player1"
        }
        else {
            e.target.style.backgroundColor = 'blue'
            e.target.id = "player2"
        }
    }
    statusDisplay.innerHTML = currentPlayerTurn()
    winning()

}

// restart game
function restartGame() {
    console.log(board)
    gameActive = true
    currentPlayer = "player1"
    board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn()
    document.querySelectorAll(".cell").forEach(circle => circle.style.backgroundColor = "")

}
document.querySelector('.restart').addEventListener('click', restartGame);