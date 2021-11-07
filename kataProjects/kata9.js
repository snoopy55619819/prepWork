// Nikhil Tallapureddy
// Question:
/*
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

// Take in string of words and return in camelCase format.
const camelCase = function(input) {
  wordList = input.split(" "); //Split into list of words.

  //Loop through each word and capitalize the first letter.
  for (let i = 1; i< wordList.length; i++) {
    wordList[i] = wordList[i][0].toUpperCase() + wordList[i].substring(1);
  }
  //Join list of strings and return as one string
  return wordList.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* Output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/