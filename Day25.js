/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

Test Cases
spinWords("Hey fellow warriors") should return"Hey wollef sroirraw"
spinWords("You are almost to the last test") should return "You are tsomla to the last test"
spinWords("Seriously this is the last one") should return "ylsuoireS this is the last one"
*/

function spinWords(string) {
  words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }

  return words.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
