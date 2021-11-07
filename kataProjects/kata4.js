// Nikhil Tallapureddy
// Question:
// Create a function named instructorWithLongestName that will receive an array of instructor objects, -
// and return the object that has the longest name. If there are two instructors with the longest name, return the first one.


const instructorWithLongestName = function(instructors) {
  let longestNameLen = 0;
  let longestNameObjIndex;

  //Return empty array {} if no instructors are listed.
  if(instructors.length === 0) {
    return {};
  }

  //Loop through list of instructor objects to find instructor with longest name.
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestNameLen) {
      longestNameLen = instructors[i].name.length;
      longestNameObjIndex = i;
    }
  }
  return instructors[longestNameObjIndex]; //Return object that contains first instructor with longest name.
};



//Tests:
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
//Output: {name: "Jeremiah", course: "Web"}

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
//Output: {name: "Domascus", course: "Web"}

console.log(instructorWithLongestName([]));
