/*
Return the N-th value of the Fibonacci sequence

Write a function to return the N-th value of the Fibonacci sequence

Test Cases:
function fibonacci(n) returns the N-th value of the Fibonacci sequence
*/

function fibonacci(n) {
	// write your solution here
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`fibonacci value at position 4: ${fibonacci(4)}`)