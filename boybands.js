var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli",  "Squash"];


var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");
var bandList = "";
var veggieList = "";

counter = 0;
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








