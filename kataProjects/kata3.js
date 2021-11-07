// Nikhil Tallapureddy
// Question:
// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

//Function takes in a strings and returns number of vowels within.
const numberOfVowels = function(data) {
  numVowels = 0;
  
  //Loop through characters of data and count vowels.
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      numVowels += 1;
    }
  }
  return numVowels;
};


//Tests:
console.log(numberOfVowels("orange")); //Output: 3
console.log(numberOfVowels("lighthouse labs")); //Output: 5
console.log(numberOfVowels("aeiou")); //Output: 5
console.log(numberOfVowels("bbbbbb")); //Output: 0
console.log(numberOfVowels("")); //Output: 0