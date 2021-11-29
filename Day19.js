/*
Resistor Color Map

Instructions
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:
Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.

These colors are encoded as follows: Black: 0 | Brown: 1 | Red: 2 | Orange: 3 | Yellow: 4 | Green: 5 | Blue: 6 | Violet: 7 | Grey: 8 | White: 9

The goal of this exercise is to create a way:
to look up the numerical value associated with a particular color band
to list the different band colors
Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.

NOTE
Although the color names are capitalised in the description, the function colorCode will always be called with the lowercase equivalent, e.g brown instead of Brown.

Test Cases:
colorCode('blue') should return 6
colorCode('white') should return 9
*/

const colorCode = (color) => {
  // Code here
  color = color.toLowerCase();
  let encodedValue = null;
  switch (color) {
    case "black":
      encodedValue = 0;
      break;
    case "brown":
      encodedValue = 1;
      break;
    case "red":
      encodedValue = 2;
      break;
    case "orange":
      encodedValue = 3;
      break;
    case "yellow":
      encodedValue = 4;
      break;
    case "green":
      encodedValue = 5;
      break;
    case "blue":
      encodedValue = 6;
      break;
    case "violet":
      encodedValue = 7;
      break;
    case "grey":
      encodedValue = 8;
      break;
    case "white":
      encodedValue = 9;
      break;
    default:
      encodedValue = "Something went wrong";
      exit;
  }
  return encodedValue;
};

console.log(colorCode("Blue"));
