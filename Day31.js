/*
Write a Program to Find the Factorial of a Number

The factorial of a number is the product of all the numbers from 1 to that number. 
For example, factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

The factorial of a positive number n is given by:
factorial of n (n!) = 1 * 2 * 3 * 4.....n The factorial of negative numbers do not exist and the factorial of 0 is 1.

Test Cases:
factorial(2) is 2
factorial(5) is 120
factorial(10) is 3628800
*/

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
