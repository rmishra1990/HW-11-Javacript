// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

//Loop through the students array and call the function to print names
for(var i=0; i< students.length;i++){
  printName(students[1])
}

//another way of invoking a function
//forEach

students.forEach(printName);

//let's do a forEach without a predefined function
students.forEach(function(name){
console.log(name)
});