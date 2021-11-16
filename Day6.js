/*
Write a function to truncate a string to a certain number of words

Truncate a string to a certain number of words

Test Cases:
truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"
*/

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    let arr = [];
    arr.push(...str.split(" "));
    
    while (arr.length !== wordLimit) arr.pop();
    const truncatedString = arr.join(" ");
    return truncatedString;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);