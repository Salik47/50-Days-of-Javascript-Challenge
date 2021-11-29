/*
Calculate Grains on a given square on a chessboard

Instructions
Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board, with the number of grains doubling on each successive square.
There are 64 squares on a chessboard (where square 1 has one grain, square 2 has two grains, and so on).

Write code that shows:
How many grains were on a given square
Total number of grains that can exist on the chessboard given the condition

NOTE:
Answer should be a BigInt value
Both function is given to you separate and you should write code in both functions

Test Cases:
How many grains were on a given square
Total number of grains that can exist on the chessboard given the condition
*/

const totalGrains = () => {
    return BigInt(2 ** 64 - 1);
}

const grainsOn = (input) => {
	return BigInt(2 ** input - 1)
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains on the Chess Board: ${totalGrains()}`)
