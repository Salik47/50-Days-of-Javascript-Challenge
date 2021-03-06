/*
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples:
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

Note: An empty string is also an isogram

Test Cases:
isIsogram("isogram") should return true
isIsogram("") should return true
isIsogram("moOse")
*/

function isIsogram(str) {
  let strSet = new Set(str.toLowerCase());
  if (str.length === strSet.size) return true;
  else return false;
}

console.log(isIsogram("moOse"));
