// Nikhil Tallapureddy
// Question:
/*
Create a function named organizeInstructors that will receive an array of instructor objects, 
and will return a new object that has the following format:
{
  CourseName: [instructors]
} 
*/

//Organize list of instructors and courses.
const organizeInstructors = function(instructors) {
  let finalList = {};

  for (let i = 0; i < instructors.length; i++) {
    let courselist = Object.keys(finalList); //Get list of courses in final list.
    let currCourse = instructors[i].course; //Track course from current object being looped.
    
    //If course is not in final list, create new course and assign name to value.
    if (courselist.indexOf(currCourse) === -1) {
      finalList[currCourse] = [instructors[i].name];
    } 
    //If course already in final list, push name into value of that course.
    else {
      let courseValue = finalList[currCourse];
      courseValue.push(instructors[i].name);

      finalList[currCourse] = courseValue;
    }
  }
  return finalList; //Return final orginazed list of instructors.
};


//Tests:
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
/* Output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
*/

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
/* Output:
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/
