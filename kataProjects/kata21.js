// Nikhil Tallapureddy
// Question:
/*
  *
  Write a guessing game where the user has to guess a secret number. After every guess the 
    program tells the user whether their number was too large or too small. At the end, the 
    number of tries needed should be printed.

  Inputting the same number multiple times should only count as one try. If the user provides 
    an answer which isn't a number, print an error message and do not count this as a try.
  *
*/

//Generate random number form 1 to 100.
const getRandomNumber = function () {
  return (Math.floor(Math.random() * 100));
}

//Get input from user for their guess. If invalid response, output 'Guess invalid, try again!'.
//Input is type string then converted to number.
const getGuess = function () {
  let prompt = require("prompt-sync")();
  let answer = prompt("Guess a number: ");//Returns a string of the user input.
  if (answer >= 100 || answer < 0) {
    console.log('Guess invalid, try again!');
    getGuess();
  }
  return Number(answer);//Convert string to number and return.
}

//Main function. Interact with user to guess the correct number giving hints when wrong.
const guessNum = function () {
  const secretNum = getRandomNumber();
  //console.log(secretNum);

  const pastGuesses = {}; //Empty object to track past guesses.
  let currAnswer = getGuess(); //Get first guess.
  pastGuesses[currAnswer] = 1; //Add guess to pastGuesses as key with value 1.
  let guessCount = 1; //Create and increase guessCount by 1.

  //If answwer is wrong, give hint and get new guess.
  while (currAnswer !== secretNum) {
    console.log(`Too ${currAnswer < secretNum ? 'Low' : 'high'}!`);//Give hint.

    //If guess has not already been guessed, increase guessCount and add to pastGuesses.
    if (pastGuesses[currAnswer] !== 1) {
      pastGuesses[currAnswer] = 1;
      guessCount++
    } 
    currAnswer = getGuess();//Get new guess.
    //Increase guessCount if guess is right because loop won't excute again.
    if (currAnswer === secretNum) {
      guessCount++
    }
  }
  return (`You got it! You took ${guessCount} attempts! The secret number was ${secretNum}.`);
}

console.log(guessNum());

/*
Guess a number:
> 12
Too Low!
Guess a number:
> 65
Too High!
Guess a number:
> 65
Already Guessed!
Guess a number:
> asdf
Not a number! Try again!
Guess a number:
> 42
You got it! You took 3 attempts!
*/