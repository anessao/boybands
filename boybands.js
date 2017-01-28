// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//   // Add the band names into the correct <div>
//   currentBand = ???;
//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;
// }

// var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
// var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli",  "Squash"];

// var bandElement = document.getElementById("boy-bands");
// var veggieElement = document.getElementById("vegetables");
// var bandList = "";
// var veggieList = "";

// var bandCounter = 0;
// var veggieCounter = 0;

// for (bandCounter; bandCounter < bands.length; bandCounter++) {
// 	bandList += "<li>" + bands[bandCounter] + "</li>"
// }

// bandElement.innerHTML = "<ul>" + bandList + "</ul>";

// for (veggieCounter; veggieCounter < vegetables.length; veggieCounter++) {
// 	veggieList +="<li>" + vegetables[veggieCounter] + "</li>"
// }
// veggieElement.innerHTML = "<ul>" + veggieList + "</ul>";


//one for loop for it all?
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction", "something"];
var vegetables = ["Carrots", "Kale"];


var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");
var bandList = "";
var veggieList = "";

counter = 0;
bcounter = 0;
vcounter = 0;
var loopTracker = 5;

while (loopTracker < bands.length) {
	loopTracker = loopTracker + (bands.length - loopTracker);
}
while (loopTracker < vegetables.length) {
	loopTracker = loopTracker + (vegetables.length - loopTracker);
}

for (counter; counter < loopTracker; counter++) {
	if (vegetables[counter] !== undefined) {
		veggieList += "<li>" + vegetables[counter] + "</li>"
	}
	if (bands[counter] !== undefined) {
		bandList += "<li>" + bands[counter] + "</li>"
	}
}

bandElement.innerHTML = "<ul>"+bandList+"</ul>";
veggieElement.innerHTML = "<ul>"+veggieList+"</ul>";








