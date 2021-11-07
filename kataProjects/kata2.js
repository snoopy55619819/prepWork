// Nikhil Tallapureddy
// Question:
// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. -
// Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

//Function takes in array of nums and sums values which meet the given condition.
const conditionalSum = function(values, condition) {
  let sum = 0;

  //Loop through all values
  for (let i = 0; i < values.length; i++) {
    switch (condition) {
      //If condition is 'even' and if value is even, add to current sum.
      case 'even':
        if(values[i] % 2 === 0) {
          sum += values[i];
        }
        break;
      //If condition is 'odd' and if value is odd, add to current sum.
      case 'odd':
        if (values[i] % 2 === 1) {
          sum += values[i];
        }
        break;
    }
  }
  return sum;
};


//Tests:
console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //Output: 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //Output: 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //Output: 144
console.log(conditionalSum([], "odd")); //Output: 0