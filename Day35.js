/*
Write a JavaScript function to get nth largest element from an unsorted array.

Input: nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
Output: 89

Test Cases:
nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4) returns 89
nthlargest([ 10, 100, 1000, 10000], 2) returns 1000
*/

function nthlargest(arr, highest) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - highest];
}

const arr = [10, 11, 100, 1000, 10000];
const highest = 2;

console.log(nthlargest(arr, highest));
