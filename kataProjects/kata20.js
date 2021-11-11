// Nikhil Tallapureddy
// Question:
/*
  *
  Create a function named blocksAway that will receive an array of directions, and return an object 
    that calculates how far north and east those directions will take someone.

  The taxi driver will always start at the same position, in the most south west position on the grid. 
    This means that the output will only need to specify an east and north position, since the taxi driver 
    can only end up in these East and North of the starting point.

  The taxi driver is given a list of directions that tell her whether to turn left or right, 
    and how many blocks to drive for. Every time the taxi driver has to turn left, she will 
    make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will 
    make a 90° turn clockwise.
  *
*/

//Function blocksAway takes in an array of directions and returns distance travelled as east 
//  and north coordinates from the origin.
//Input: array of strings and num
//Output: object with east and north distance away from origin
const blocksAway = function(directions) {
  //Set starting coordinates.
  let eastCoord = 0;
  let northCoord = 0;

  //Define and set starting direction as values from 1-4 for incrementing purposes.
  //currDir =>
  //  north = 1
  //  east = 2
  //  south = 3
  //  west = 4
  let currDir = 1;
  (directions[0] === 'right' ? currDir = 1 : currDir = 2);

  //Loop through directions and update east and north coordinates.
  for (let i = 0; i < directions.length; i += 2) {
    //Update the current direction(currDir) based on next turn/direction.
    if (directions[i] === 'right') {
      (currDir === 4 ? currDir = 1 : currDir++);
    } else if (directions[i] === 'left') {
      (currDir === 1 ? currDir = 4 : currDir--);
    }
    //Update the east/north coordinates depending on the length of the move.
    if (currDir === 1) {northCoord += directions[i + 1]}
    else if (currDir === 2) {eastCoord += directions[i + 1]}
    else if (currDir === 3) {northCoord -= directions[i + 1]}
    else if (currDir === 4) {eastCoord -= directions[i + 1]}
  }
  //Return array of final coordinates.
  return {east: eastCoord, north: northCoord};
};


//Tests:
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

//Output:
/*
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/
