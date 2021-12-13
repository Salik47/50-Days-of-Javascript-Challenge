/*
Mumbling

Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.
Only alphabets are passed as arguments for the accum(s) funciton

Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

Test Cases:
accum("ZpglnRxqenU") returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum("NyffsGeyylB") returns "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum("MjtkuBovqrU") returns "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
*/

function accum(s) {
  let letters = s.split("");
  let result = "";

  for (let i = 0; i < letters.length; i++) {
    if (i === 0) {
      result += letters[i].toUpperCase();
    } else {
      result =
        result +
        "-" +
        letters[i].toUpperCase() +
        letters[i].toLowerCase().repeat(i);
    }
  }
  
  return result;
}

accum("ZpglnRxqenU");
