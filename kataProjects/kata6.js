// Nikhil Tallapureddy
// Question:
// We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, -
// or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string -
// with type of the vehicle that is looking for a parking spot.

//Find all available spots and assign a valid spot to vechicle if there is one available.
const whereCanIPark = function (spots, vehicle) {
  regularSpotsAvailable = [];
  smallSpotsAvailable = [];
  motorcycleSpotsAvailable = [];

  //Get list of all available spots/coordinates.
  for (let x = 0; x < spots.length; x++) {
    for (let y = 0; y < spots[x].length; y++) {
      if (spots[x][y] === "R") {
        regularSpotsAvailable.push([y, x]);
      } else if (spots[x][y] === "S") {
        smallSpotsAvailable.push([y, x]);
      } else if (spots[x][y] === "M") {
        motorcycleSpotsAvailable.push([y, x]);
      }
    }
  }

  //Check which spot the vechicle can be assigned to.
  switch (vehicle) {
    case 'regular':
      return ((regularSpotsAvailable.length === 0) ? false : regularSpotsAvailable[0]);
    case 'small':
      if (regularSpotsAvailable.length === 0 && smallSpotsAvailable.length === 0) {
        return false;
      } else if (regularSpotsAvailable.length === 0) {
        return smallSpotsAvailable[0];
      } else {
        return regularSpotsAvailable[0];
      }
    case 'motorcycle':
      if (regularSpotsAvailable.length === 0 && smallSpotsAvailable.length === 0 && motorcycleSpotsAvailable.length === 0) {
        return false;
      } else if (motorcycleSpotsAvailable.length !== 0) {
        return motorcycleSpotsAvailable[0];
      } else if (smallSpotsAvailable.length !== 0) {
        return smallSpotsAvailable[0];
      } else {
        return regularSpotsAvailable[0];
      }
  }
};


//Tests:
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
//Output: [4, 0]

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));
//Output: false

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));
//Output: [3, 5]