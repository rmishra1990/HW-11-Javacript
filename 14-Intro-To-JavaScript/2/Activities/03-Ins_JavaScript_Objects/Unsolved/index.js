//Python dictionary is equivalent in Javascript is an Object List

var movieList ={
    name:"Titanic",
    year: 1997,
    profitable: true,
    Cities: ["New York","London","Paris","Iceland",22,67,89]

}

//accessing the objects from the object list
console.log(movieList.name)
console.log(movieList.Cities[1])

//add a new key-value pair (object) to an existing Javascript object (called a dictionary in Python)
movieList.rating = 4.5;
console.log(movieList);

//remove an element
delete movieList.Cities;
console.log(movieList);

console.log(Object.keys(movieList));
console.log(Object.values(movieList));




