/*
Write a program to find the greatest common divisor (gcd) of two positive numbers.

The greatest common divisor (GCD), also called the greatest common factor, of two numbers is the largest number that divides them both. For instance, the greatest common factor of 20 and 15 is 5, since 5 divides both 20 and 15 and no larger number has this property.

Test Cases:
gcd(2154, 458)
gcd(12, 4)
gcd(333, 3333)
*/

function gcd(a, b) {
  let gcd = 1;

  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
}

const a = 20;
const b = 15;

console.log("The GCD of " + a + ", " + b + " is " + gcd(a, b));
