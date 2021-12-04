function expandedForm(num) {
  let quotient = 0,
    countOfZeroes = 0;

  let numArr = [];
  let result = "";

  while (num > 0) {
    quotient = Math.floor(num % 10);
    if (countOfZeroes === 0) numArr.push(String(quotient));
    else numArr.push(String(quotient) + "0".repeat(countOfZeroes));
    countOfZeroes++;
    num = Math.floor(num / 10);
  }

  numArr = numArr.filter((num) => Number(num) !== 0);

  if (numArr.length === 0) {
    result = numArr[0];
  } else {
    for (let i = numArr.length - 1; i >= 0; i--) {
      if (Number(numArr[i]) !== 0) {
        if (i === 0) result += numArr[i];
        else result = result + numArr[i] + "+";
      }
    }
  }

  return result;
}

console.log(expandedForm(1069));
