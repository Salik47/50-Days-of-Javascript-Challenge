/*
Write a program to reverse a string

String can be reversed by iterating it and storing it in reverse order
String can also be reversed by converting it to array, then joining it after reversing

Test Cases:
reverseAString("JavaScript is awesome") should return "emosewa si tpircSavaJ"
reverseAString("Peter Parker is Spiderman") should return "namredipS si rekraP reteP"
reverseAString("codedamn") should return "nmadedoc"
*/

const str = "JavaScript is awesome"

function reverseAString(str) {
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

console.log(`Reversed string is: ${reverseAString(str)}`)
