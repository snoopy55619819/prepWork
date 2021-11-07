// Nikhil Tallapureddy
// Question:
// Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.

const sumLargestNumbers = function(arr) {
  let highestNum = Math.max(arr[0], arr[1]); //Array minium length 2.
  let secondHighestNum = Math.min(arr[0],arr[1]); //Assign lower of first 2 elements to secondLowestNum.

  //Start at index 2. First 2 elements addressed above.
  for(let i = 2; i < arr.length; i++) {

    if(arr[i] > secondHighestNum) {
      secondHighestNum = arr[i];

      if(secondHighestNum > highestNum) {
        const tempHighest = highestNum;
        highestNum = secondHighestNum;
        secondHighestNum = tempHighest;
      }
    }
  }
  return (highestNum + secondHighestNum); 
}
//Function sumLargestNumbers takes in array of numbers length > 2, and return sum of 2 largest numbers.

//Tests:
console.log(sumLargestNumbers([10, 10, 10, 10])); //Output: 20
console.log(sumLargestNumbers([1, 2, 3])); //Output: 5
console.log(sumLargestNumbers([-10, -4, -34, -6, -92, 2,92])); //Output: 102

