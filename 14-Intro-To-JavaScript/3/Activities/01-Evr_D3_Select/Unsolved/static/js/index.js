//select the text of an HTML page

var text1 = d3.select(".text1").text();
console.log("text1 is: ", text1);

var text2 = d3.select("#text2").text();
console.log("text2 is: ", text2);

//how do I change the content / text for text1?
d3.select(".text1").text("This div has no class");
console.log("text1 is: ", d3.select(".text1").text());

d3.select("#text2").text("I have made this change");
console.log("text2 is: ", d3.select("#text2").text());

//Capture the link associated to a class aka a child element
var myLink = d3.select(".my-link").html();
console.log(myLink);

//Capture the child element
var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

/

