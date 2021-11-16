// Nikhil Tallapureddy
// Question:
/*
  *
  Create a function named squareCode that will receive a message, and return the secret square code 
  version of the message.

  In Square Code, the spaces are removed from the english text and the characters are written into 
  a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would 
  have given us roots" is 54 characters long, once the spaces are removed, so it is written 
  into a rectangle with 7 rows and 8 columns.
    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
  The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), 
  we get 8. If we use that for the number of characters on each line (the number of columns), 
  then our text will be close to a square shape.

  The message is then coded by reading down the columns going left to right. 

  For example, the message above is coded as:

    imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

  And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
  *
*/

//Create an array of nested empty arrays of size len.
const arrCreator = function (len, strLength) {
  let arr = [];
  let i = 1;
  if (strLength <= len * (len - 1)) { //Cases where the last arr will be empty later are not created here.
    i = 2;
  }
  for(i; i <= len; i++) {
    arr.push([]);
  }
  return arr;
}

//Take in an array and desired length. Increase each string to len by adding spaces " " to the end.
//This creates square shape and can be transposed later.
const arrCleaner = function (arr, len) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].length < len) {
      arr[i] = arr[i].concat(" ");
    }
  }
  return arr;
}

//Function to transpose the codedMessage to code the message further.
//Possible method to look into later:
//codedMessage = codedMessage => codedMessage[0].map((x,i) => codedMessage.map(x => x[i]));
const transpose = function (matrix) {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
};

const squareCode = function(message1) {
  // remove whitepsace in string.
  // find rows(r) and height(h) of square code.
  // create array of r length and assign characters to it. 
  // use columns as new code/transpose it.

  //Clean up input message: trim whitespace at the ends -> split by " " -> join without any spaces.
  const message = message1.trim().split(" ").join("");
  //console.log(message);
  const squareLen = Math.ceil(Math.sqrt(message.length)); //Calculate square length.
  let codedMessage = arrCreator(squareLen, message.length); //Create an array of empty nested arrays.
  //console.log(codedMessage);
  //Split up message into strings of characters of length squareLen.
  for (let i = 0, j = 0; i < message.length; i++) {
    if (i % squareLen === 0 && i !== 0) {
      j += 1;
    }
    codedMessage[j] += message[i];
  }
  codedMessage = arrCleaner(codedMessage, squareLen); //Clean up codedMessage to have strings of length squareLen.
  
  //Split strings into nested list of characters.
  for (let i = 0; i < codedMessage.length; i++) {
    codedMessage[i] = codedMessage[i].split("");
  }

  codedMessage = transpose(codedMessage);
  
  //Join the transposed codedMessage back into list of strings and trim whitespace off ends.
  for (let i = 0; i < codedMessage.length; i++) {
    codedMessage[i] = codedMessage[i].join("").trim();
  }

  //Join the fully coded message into one string with spaces and return that.
  return codedMessage.join(" ");
};

//Tests:
//console.log(squareCode("helloooo"));
console.log(squareCode("chill"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

//Outputs:
/*
chi llo ut ->
clu hlt io  

feed thed og ->
fto ehg ee dd

have anic eday ->
hae and via ecy

ifmanwa smean... ->
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/
