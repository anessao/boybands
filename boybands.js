// // Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// // The number of loops to perform (what if the array changes?)
// var loopCount = 5;
// // Keep track of which band we're on in the loop
// var currentBand = "";
// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";
// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }

var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");
var bandList = "";
var veggieList = "";

var bandCounter = 0;
var veggieCounter = 0;

for (bandCounter; bandCounter < bands.length; bandCounter++) {
	bandList +="<li>"+bands[bandCounter]+"</li>"
}

bandElement.innerHTML = "<ul>"+bandList+"</ul>";

for (veggieCounter; veggieCounter < vegetables.length; veggieCounter++) {
	veggieList +="<li>"+vegetables[veggieCounter]+"</li>"
}

veggieElement.innerHTML = "<ul>"+veggieList+"</ul>";












