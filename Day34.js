/*
Write a program to find the most frequent item of an array

Input: const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Output: a 5

Test Cases:
mostFreq([1, 2, 2, 4, 5, 6, 6]) returns 2 2
mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) returns a 5
*/

function mostFreq(arr) {
  let i = 0;
  let count = 0;
  let max = 0;
  let freqTable = {};
  
  arr.sort();
  
  while (i < arr.length) {
    if (!Object.keys(freqTable).includes(arr[i].toString())) {
      count = arr.lastIndexOf(arr[i]) - i + 1;
      if (count > max) {
        max = count;
        freqTable[arr[i]] = count;
      }
    }
    i++;
  }
  
  for (const [key, value] of Object.entries(freqTable)) {
    if (value === max) return `${key} ${value}`;
  }
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

console.log(mostFreq(arr));
