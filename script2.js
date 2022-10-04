let matrix = [ // go from top corner for indexing
    [null, null, null, null, null],
    [null, null, null, null, null],
    ["player1", "player1", null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, "last value"],
]

console.log(matrix[2][1])

for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) { // row
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) { // column
        console.log(matrix[rowIndex][colIndex])
    }
    console.log("")
}