/* 
Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels
The input can consit of Lower case and upper case letters so make sure to count both of them.

Test Cases:
getCount("abracadabra") should return 5
getCount("THe Strings are SOO COOL") should return 8
getCount("There exists only 5 vowels") should return 7
*/

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelsCount++;
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));
