/*
Write a function to check if an object is empty or not in javaScript?

How to check if an object is empty or not in javaScript?

Test Cases:
isEmpty({}) returns true
isEmpty({key: 1}) returns false
*/

const obj = { key: 1 };

function isEmpty(obj) {
  // write your solution here
  for (let i in obj) return false;

  return true;
}

console.log(`is empty object: ${isEmpty(obj)}`);
