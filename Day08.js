/*
Write a function which accepts two valid dates and returns the difference between them as number of days

The difference between 2 dates in JavaScript will give the time difference in milliseconds
Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

Test Cases:
getDaysBetweenDates('10/15/2020', '12/1/2020') returns 47
getDaysBetweenDates('11/10/2021', '11/12/2021') returns 2
getDaysBetweenDates('11/01/2020', '11/05/2020') returns 4
*/

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  const date1 = new Date(dateText1);
  const date2 = new Date(dateText2);

  return Math.floor((date2 - date1) / DAY_IN_MILLISECONDS);
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
