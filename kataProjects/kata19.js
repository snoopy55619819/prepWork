// Nikhil Tallapureddy
// Question:
/*
  Create a function generateBoard which will return a nested array representing the board,
   containing the location of two queens.
   
  Create a function called queenThreat that will indicate whether or not the two queens are 
    positioned so that they attack each other.

  A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen 
    can attack pieces which are on the same row, column, or diagonal.

  In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). 

  For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents 
    a queen on the corresponding square, and a O in the array represents an unoccupied square.

  [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  Our first challenge will be to write a function that generates a chess board like this. 

  We will then write a function to detect weather or not the two queens are positioned so that 
    they attack each other.
*/


//Take in 2 queen positions and generate a chess board with the two queens placed.
//Output array: square with 1 represents queen position. 0 represents empty square.
const generateBoard = function (queen1, queen2) {
  //Create 8x8 chess board with all squares empty.
  let chessBoard = 
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  chessBoard[queen1[0]][queen1[1]] += 1; //Place queen1 on board.
  chessBoard[queen2[0]][queen2[1]] += 1; //Place queen2 on board.
  return chessBoard;
};

//Take in a generatedBoard with 2 queens placed and returns true if the queens are positioned so -
// so that they attack each other and false otherwise.
const queenThreat = function (generatedBoard) {
  let board = generatedBoard; //Change variable name for easier access.
  let queenX = -1;
  let queenY = -1;
  
  //Find position of 1 queen then use as reference.
  for (let x = 0; x < 8; x++) {
    for  (let y = 0; y < 8; y++) {
      if (board[x][y] === 1){
        queenX = x;
        queenY = y;
        break;
      }
    }
  }

  //Check horizontal moves for another queen.
  for (let y = 0; y < 8; y++) {
    if (board[queenX][y] === 1 && y !== queenY) {
      return true;
    }
  }
  //Check verical moves for another queen.
  for (let x = 0; x < 8; x++) {
    if (board[x][queenY] === 1 && x !== queenX) {
      return true;
    }
  }
  //Check diagonal moves for another queen.
  //->
  //check top-left:
  for (let x = queenX, y = queenY; x < 8 && x >= 0 && y < 8 && y >= 0; x--, y--) {
    if (board[x][y] === 1 && x !== queenX && y !== queenY) {
      return true;
    }
  }
  //check bottom-right:
  for (let x = queenX, y = queenY; x < 8 && x >= 0 && y < 8 && y >= 0; x++, y++) {
    if (board[x][y] === 1 && x !== queenX && y !== queenY) {
      return true;
    }
  }
  //check top-right:
  for (let x = queenX, y = queenY; x < 8 && x >= 0 && y < 8 && y >= 0; x--, y++) {
    if (board[x][y] === 1 && x !== queenX && y !== queenY) {
      return true;
    }
  }
  //check bottom-left:
  for (let x = queenX, y = queenY; x < 8 && x >= 0 && y < 8 && y >= 0; x++, y--) {
    if (board[x][y] === 1 && x !== queenX && y !== queenY) {
      return true;
    }
  }
  return false;
};


//Tests:
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
//Output:
/*
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
//Output:
/*
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/
