/* 
Write a program to reverse a given integer number

The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0

A simple approach to reverse a number could also be to convert it in to a string and then reverse it

Test Cases:
reverseGivenInteger(3849) returns 9483
reverseGivenInteger(2222) returns 2222
reverseGivenInteger(1002) returns 2001
*/

const num = 3849;

function reverseGivenInteger(num) {
  let reversedNum = 0;

  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversedNum;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
