/* 
Function which returns a random number in the given range

Problem Statement: Create a function which returns a random number in the given range of values both inclusive

Test Cases:
randomNumberGeneratorInRange(10, 50) should return a number between 10-50 (inclusive)
randomNumberGeneratorInRange(100, 200) should return a number between 100-200 (inclusive)
*/

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    rangeStart = Math.ceil(rangeStart);
    rangeEnd = Math.floor(rangeEnd);
    let randomNumber = Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
	return randomNumber;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
