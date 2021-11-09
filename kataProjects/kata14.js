// Nikhil Tallapureddy
// Question:
/*
Create a function named calculateChange that takes in a total amount of a bill and 
the total cash given to pay that bill. Return a new object that describes the total 
amount of change for the cashier to give back. Omit any types of change that you shouldn't 
give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars - 2000
Ten dollars - 1000
Five dollars - 500
Two dollars - 200
One dollar - 100
Quarter (25¢) - 25
Dime (10¢) - 10
Nickel (5¢) - 5
Penny (1¢) - 1
*/

//Calculate change and return objects of the denominations.
const calculateChange = function(total, cash) {
  let change = cash % total;
  let changeObj = {};

  //Return empty {} if total equals cash or 0.
  if (cash === total || total === 0) {
    return {};
  }

  if (Math.floor(change / 2000) !== 0) {
    changeObj["twentyDollar"] = Math.floor(change / 2000);
    change = change % 2000;
  } 
  if (Math.floor (change / 1000) !== 0) {
    changeObj["tenDollar"] = Math.floor(change / 1000);
    change = change % 1000;
  } 
  if (Math.floor (change / 500) !== 0) {
    changeObj["fiveDollar"] = Math.floor(change / 500);
    change = change % 500;
  } 
  if (Math.floor (change / 200) !== 0) {
    changeObj["twoDollar"] = Math.floor(change / 200);
    change = change % 200;
  } 
  if (Math.floor (change / 100) !== 0) {
    changeObj["oneDollar"] = Math.floor(change / 100);
    change = change % 100;
  } 
  if (Math.floor (change / 25) !== 0) {
    changeObj["quarter"] = Math.floor(change / 25);
    change = change % 25;
  } 
  if (Math.floor (change / 10) !== 0) {
    changeObj["dime"] = Math.floor(change / 10);
    change = change % 10;
  }
  if (Math.floor (change / 5) !== 0) {
    changeObj["nickel"] = Math.floor(change / 5);
    change = change % 5;
  } 
  if (change !== 0) {
    changeObj["penny"] = change;
  }
  return changeObj;
};


//Tests:
console.log(calculateChange(1787, 2000)); //Output: { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); //Output: { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); //Output: { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
