// Nikhil Tallapureddy
// Question:
/* 
Create a function named repeatNumbers that will return a string with each of the given values 
repeated the appropriate number of times, if there are multiple sets of values each set should 
be separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function(data) {
  let finalStr = "";

  //Function creates a string repeated 'repeat' number of times.
  const createString = function (string, repeat) {
    let str = "";
    for (let i = 1; i <= repeat; i++) {
      str += string;
    }
    return str;
  }

  //Loop through data to create strings using createString function.
  for (let j = 0; j < data.length; j++) {
    finalStr += createString(data[j][0].toString(), data[j][1]) + ", ";
  }
  return finalStr.slice(0,-2);
};

console.log(repeatNumbers([[1, 10]])); //Output: 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //Output: 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //Output: 10101010, 343434343434, 9292
console.log(repeatNumbers([[1, 0]])); //Output: ""
console.log(repeatNumbers([])); //Output: ""
