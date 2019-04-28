// Create a variable called "name" that holds a string
var name = "Homer Simpson"; //don't need semicolon but we can keep it 

// Create a variable called "country" that holds a string
var country = "USA";

// Create a variable called "age" that holds an integer
var age = 26;

// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 30;

// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage * 8;

// Create a variable that holds a number as a string
var weeklyHours = "40";

// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = hourlyWage * parseInt(weeklyHours);

// Create a variable called "satisfied" that holds a boolean
var satisfied = "true"

// Print out "Hello <name>!"
console.log("Hello "+name);

// Print out what country the user entered
console.log("Country: "+country);

// Print out the user's age
console.log("Age: "+age);

// Print out the daily wage that was calculated
console.log("Daily Wage: "+dailyWage);

// Print out the weekly wage that was calculated
console.log("Weekly Wage: "+weeklyWage);

// Using an IF statement to print out whether the users were satisfied
if (satisfied !== "true"){
    console.log("The user is satisfied")
}

if (!satisfied){

}

