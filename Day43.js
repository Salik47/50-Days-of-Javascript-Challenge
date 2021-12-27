/*
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test Cases:
high('man i need a taxi up to ubud') should return 'taxi'
high('what time are we climbing up the volcano') should return 'volcano'
*/

function high(x) {
  let xArray = x.split(" "),
    points = 0,
    max = 0,
    highestScore = 0;

  for (let i = 0; i < xArray.length; i++) {
    points = 0;
    for (let j = 0; j < xArray[i].length; j++)
      points += xArray[i].charCodeAt(j) - 96;
    if (points > highestScore) {
      highestScore = points;
      max = xArray[i];
    }
  }

  return max;
}

console.log(high("man i need a taxi up to ubud"));
