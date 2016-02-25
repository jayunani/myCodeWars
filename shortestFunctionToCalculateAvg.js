// Given an array of integers, calculate the Average of these numbers.
// Main challenge is to write shortest and compact function for it.
// For example: var a = [0, 1, 2]; 
// avg(a) // output should be 1

var avg = function(numArray){
  return numArray.reduce( function (a,b) { return a+b } ) / numArray.length;
}