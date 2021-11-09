// Nikhil Tallapureddy
// Question:
/*
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

//Return fullform of month based on month number.
const convertMonth = function (month) {
  switch (month) {
    case '01': return 'January';
    case '02': return 'February';
    case '03': return 'March';
    case '04': return 'April';
    case '05': return 'May';
    case '06': return 'June';
    case '07': return 'July';
    case '08': return 'August';
    case '09': return 'September';
    case '10': return 'October';
    case '11': return 'November';
    case '12': return 'December';
  }
}
//console.log(convertMonth('03'));

//Return suffix of day full form.
const convertDay = function (day) {
  if (day === 1 || day === 21) {
    return 'st';
  } else if (day === 2 || day === 22) {
    return 'nd';
  } else if (day === 3 || day === 23) {
    return 'rd';
  }else {
    return 'th';
  }
}
//console.log(convertDay(23));

//Return full form of date.
const talkingCalendar = function(date) {
  let month = convertMonth(date.substring(5,7));
  let day = parseInt(date.substring(8, 10)) + convertDay(date.substring(8, 10) * 1);
  let year = date.substring(0, 4);

  return (month + " " + day + ", " + year);
};

//Tests:
console.log(talkingCalendar("2017/12/02")); //Output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); //OUtput: November 11th, 2007
console.log(talkingCalendar("1987/08/24")); //Output: August 24th, 1987
