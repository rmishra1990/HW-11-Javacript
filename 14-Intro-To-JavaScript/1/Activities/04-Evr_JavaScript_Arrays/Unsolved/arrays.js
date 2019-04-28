//array in JS
//in python an array is a list
// aList = [1,2,'a','b']

var anArray = ["a","b","c"];

//display the array in console

console.log(anArray);

//reference elements of the array
var firstLetter = anArray[0];
var lastLetter = anArray[2];
console.log(firstLetter,", ",lastLetter);

//in python lists are mutable and in JS arrays are mutable
//to add a new element to an array in JS:
anArray.push("d");
anArray.push("e");

console.log("The new list:" , anArray);

//get partial array 
//using a function called slice

var slicedArray = anArray.slice(1);
console.log(slicedArray);

//how do I get more than one element sliced?
var slicedArray1 = anArray.slice(0,3);
console.log(slicedArray1);

var aString = "Ashish likes to drink Panera coffee";
console.log("Let's see if JS also treats a string as an array")
console.log(aString.slice(0,5));

//if we want last 5 letters u can do slice(-5) or lenghth - 5

//effect of the split function
console.log(aString.split(" "));


splitString = aString.split(" ");
console.log(splitString.slice(-1));