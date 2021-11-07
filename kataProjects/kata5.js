// Nikhil Tallapureddy
// Question:
// Create a function named urlEncode that will receive a string of words, and return that string with all of the -
// whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, -
// you should only replace the whitespace within the string.

// //Replace spaces in between text to "%20" using .replace method.
// const urlEncode = function(text) {
//   let newString = text.trim();
//   return newString.replace(/ /g, "%20"); //Use '/ /g' format for first paramenter to apply replace globally to whole string.
// };

//Replace spaces in between text to "%20" using loops.
const urlEncode = function(text) {
  text = text.trim();
  let newString = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString += "%20";
    } else {
      newString += text[i];
    }
  }
  return newString;
};

//Tests:
console.log(urlEncode("Lighthouse Labs")); //Output: Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); //Output: Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); //Output: blue%20is%20greener%20than%20purple%20for%20sure
console.log(urlEncode("")); //Output: ""
