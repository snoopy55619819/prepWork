// Nikhil Tallapureddy
// Question:
/*
The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction.
The totalVolume function should use the previous three functions to calculate the total volume of an attraction.
*/

//Value of Pi
const PI = 3.14159 ;

//Calculate volume of sphere.
const sphereVolume = function (radius) {
  // formula: volume = 4/3 * PI * r**3
  return (4 / 3 * PI * (radius**3));
}
//Test for volume of sphere.
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

//Calculate volume of cone.
const coneVolume = function (radius, height) {
  // formula: volume = PI * r**2 * h/3
  return (PI * (radius**2) * height / 3);
}
//Test for volume of cone.
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

//Calculate volume of prism.
const prismVolume = function (height, width, depth) {
  // formula: volume = b * h * w
  return (height * width * depth);
}
//Test for volume of prism.
console.log(prismVolume(3, 4, 5) === 60);

//Calculate TOTAL volume of attraction.
const totalVolume = function (solids) {
  let attractionVolume = 0;

  //Loop through objects. calculate volume of each and add to total volume.
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === 'sphere') {
      attractionVolume += sphereVolume(solids[i].radius);
    } else if (solids[i].type === 'cone') {
      attractionVolume += coneVolume(solids[i].radius, solids[i].height);
    } else if (solids[i]('type') === 'prism') {
      attractionVolume += prismVolume(solids[i]('height'), solids[i]('width'), solids[i]('depth'));
    }
  }
  return attractionVolume; //Return final attractionVolume.
}

//Tests:
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);