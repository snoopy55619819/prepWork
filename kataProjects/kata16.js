// Nikhil Tallapureddy
// Question:
/*
Create a function named makeCase that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

camel -> thisIsCamelCase
pascal -> ThisIsPascalCase
snake -> this_is_snake_case
kebab -> this-is-kebab-case
title -> This Is Title Case
vowel -> thIsIsvOwElcAsE
consonant -> THiSiSCoNSoNaNTCaSe
upper -> THISISUPPERCASE
lower -> thisislowercase

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1. camel -> pascal -> snake -> kebab -> title
2. vowel -> consonant
3. upper -> lower
*/

//Function takes in string and casing format.
//Returns string with format applied to it.
const caseConverter = function (string1, style) {
  let wordList = string1.split(" "); //Split string into list of words.

  if (style === 'camel') {
    //Loop through each word and capitalize the first letter, starting from 2nd word.
    for (let i = 1; i< wordList.length; i++) {
      wordList[i] = wordList[i][0].toUpperCase() + wordList[i].substring(1);
    }
    return wordList.join("");

  } else if (style === 'pascal') {
    //Loop through each word and capitalize the first letter.
    for (let i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i][0].toUpperCase() + wordList[i].substring(1);
    }
    return wordList.join("");

  } else if (style === 'snake') {
    //Return string seperated by '_'.
    return wordList.join("_");
    
  } else if (style === 'kebab') {
    //Return string seperated by '-'.
    return wordList.join("-");

  } else if (style === 'title') {
    //Loop through each word and capitalize the first letter and add a space between words.
    for (let i = 0; i< wordList.length; i++) {
      wordList[i] = wordList[i][0].toUpperCase() + wordList[i].substring(1);
    }
    return wordList.join(" ");

  } else if (style === 'vowel') {
    let vowelCase = "";

    //Loop through all characters and capitalize vowels.
    for (let i = 0; i < wordList.length; i++) {
      let currWord = "";
      
      for(let j = 0; j < wordList[i].length; j++) {
        if (wordList[i][j] === 'a' || wordList[i][j] === 'e' || wordList[i][j] === 'i' || wordList[i][j] === 'o' || wordList[i][j] === 'u') {
          currWord += wordList[i][j].toUpperCase();
        } else {
          currWord += wordList[i][j];
        }
      } 
      vowelCase += currWord + " ";
    }
    return vowelCase.slice(0, -1);

/* -> this method converts whole sentence to string and returns vowelCase without spaces. Need more details on format.
    //Remove spaces and capitalize vowels.
    let vowelCase = "";
    for(let i = 0; i < wordListStr.length; i++) {
      if (wordListStr[i] === 'a' || wordListStr[i] === 'e' || wordListStr[i] === 'i' || wordListStr[i] === 'o' || wordListStr[i] === 'u') {
        vowelCase += wordListStr[i].toUpperCase();
      } else {
        vowelCase += wordListStr[i];
      }
    } 
    return vowelCase;
*/

  } else if (style === 'consonant') {
    let consonantCase = "";

    //Loop through all characters and capitalize consonants.
    for (let i = 0; i < wordList.length; i++) {
      let currWord = "";
      
      for(let j = 0; j < wordList[i].length; j++) {
        if (wordList[i][j] === 'a' || wordList[i][j] === 'e' || wordList[i][j] === 'i' || wordList[i][j] === 'o' || wordList[i][j] === 'u') {
          currWord += wordList[i][j];
        } else {
          currWord += wordList[i][j].toUpperCase();
        }
      } 
      consonantCase += currWord + " ";
    }
    return consonantCase.slice(0, -1);

  } else if ( style === 'upper') {
    //Convert all characters to uppercase.
    for (let i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i].toUpperCase();
    }

    return wordList.join(" ");

  } else if ( style === 'lower') {
    //Convert all characters to lowercase.
    for (let i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i].toLowerCase();
    }

    return wordList.join(" ");
  }
};

//Sort array of casing formats in order.
//Refer to question description at the top for details.
const arrSorter = function (array) {
  sortedArr = [];
  returnArray = [];

  //Assign numerical value to set precedence in order.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'camel') {sortedArr.push(1)}
    else if (array[i] === 'pascal') {sortedArr.push(2)}
    else if (array[i] === 'snake') {sortedArr.push(3)}
    else if (array[i] === 'kebab') {sortedArr.push(4)}
    else if (array[i] === 'title') {sortedArr.push(5)}
    else if (array[i] === 'vowel') {sortedArr.push(6)}
    else if (array[i] === 'consonant') {sortedArr.push(7)}
    else if (array[i] === 'upper') {sortedArr.push(8)}
    else if (array[i] === 'lower') {sortedArr.push(9)}
  }
  sortedArr = sortedArr.sort((a, b) => a - b); //Sort in acending order.

  //Reassign name of casing.
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === 1) {returnArray.push('camel')}
    else if (sortedArr[i] === 2) {returnArray.push('pascal')}
    else if (sortedArr[i] === 3) {returnArray.push('snake')}
    else if (sortedArr[i] === 4) {returnArray.push('kebab')}
    else if (sortedArr[i] === 5) {returnArray.push('title')}
    else if (sortedArr[i] === 6) {returnArray.push('vowel')}
    else if (sortedArr[i] === 7) {returnArray.push('consonant')}
    else if (sortedArr[i] === 8) {returnArray.push('upper')}
    else if (sortedArr[i] === 9) {returnArray.push('lower')}
  }
  return returnArray;
}

//Apply requested casing formats to input string.
const makeCase = function(input, case1) {
  let currString = input;
  
  //If only 1 casing, apply format and return string.
  if (!Array.isArray(case1)) {
    return caseConverter(input, case1);
  } else { //If multiple casings, then apply all casing formats to string.
    case1 = arrSorter(case1); //Sort casing order in terms of precedence.

    for(let i = 0; i < case1.length; i++) {
      currString = caseConverter(currString, case1[i]);
    }
    return currString;
  }
};


//Tests:
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* Outputs:
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/

