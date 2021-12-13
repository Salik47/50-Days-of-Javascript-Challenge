/*
Write a function which can convert the time input given in 12 hours format to 24 hours format

The check for 'AM' and 'PM' can be verified using endsWith String method. An extra 0 would be needed if the hours have single digit

Test Cases:
convertTo24HrsFormat("12:10AM") returns 00:10
convertTo24HrsFormat("5:00AM") returns 05:00
convertTo24HrsFormat("12:33PM") returns 12:33
convertTo24HrsFormat("01:59PM") returns 13:59
convertTo24HrsFormat("11:8PM") returns 23:08
convertTo24HrsFormat("10:02PM") returns 22:02
 */

const time = "12:10AM";

function convertTo24HrsFormat(time) {
  let timeArr = time.split(":");
  let hours = timeArr[0];
  let minutesWithPeriod = timeArr[1];
  let period = minutesWithPeriod.slice(-2);

  let endingMinutesIndex = minutesWithPeriod.indexOf("P");
  if (endingMinutesIndex === -1) {
    endingMinutesIndex = minutesWithPeriod.indexOf("A");
  }

  let minutes = minutesWithPeriod.slice(0, endingMinutesIndex);
  
  if (hours.length === 1) hours = "0" + hours;
  if (minutes.length === 1) minutes = "0" + minutes;

  if (period === "PM" && parseInt(hours) < 12) hours = Number(hours) + 12;
  if (hours === "12" && period === "AM") hours = "00";

  let convertedTime = `${hours}:${minutes}`;

  return convertedTime;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
