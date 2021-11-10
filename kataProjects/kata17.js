// Nikhil Tallapureddy
// Question:
/*
  Create a function named urlDecode that will receive a URL encoded string, 
  and return the a JavaScript object that represents that data.

  To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. 
  For this assignment we will only focus on the following URL encoding rules:

  - %20 represents a space character.
  - Key-value pairs are represented using an = character: key=value
  - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
  - So the following URL encoded string:

  city=Vancouver&weather=lots%20of%20rain

  Could be converted to the following JavaScript object:
  {
    city: "Vancouver",
    weather: "lots of rain"
  }
*/


const urlDecode = function(text) {
  // split by '&' to get key-value pairs.
  // then split by '=' to seperate key from value.
  // now first element is key, 2nd is value.
  // split value by '%20' and then join with ' ' to get string to be used as decoded value.
  // using key and decoded Value as key-value pair, add to object.
  // return final decoded object.

  decodedObj = {};
  text = text.split('&');

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].split('=');

    text[i][1] = text[i][1].split('%20').join(" ");
  }

  for (let i = 0; i < text.length; i++) {
    decodedObj[text[i][0]] = text[i][1];
  }
  return decodedObj;
};

//Tests:
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//Output:
/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/
