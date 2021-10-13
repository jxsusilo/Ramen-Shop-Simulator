/*
Navigation
*/

function showWelcome() {
	document.getElementById("welcome").style.visibility = "visible";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "hidden";
	document.getElementById("bowl").style.visibility = "hidden";
}

function showPage1() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "visible";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "visible";
	document.getElementById("bowl").style.visibility = "visible";
}

function showPage2() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "visible";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "visible";
}

function showEnd() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("end").style.visibility = "visible";
	document.getElementById("ramen").style.visibility = "hidden";
	
}

function displaySoup(x) {
	var item = "";

	switch(x) {
		case 1:
			item = "shoyu";
			break;
		case 2:
			item = "miso";
			break;
		case 3:
			item = "tonkotsu";
			break;
	}

	if (document.getElementById(item).style.visibility == "visible") {
		document.getElementById(item).style.visibility = "hidden";
	}
	else {
		document.getElementById(item).style.visibility = "visible";
	}

}

function displayTopping(x) {
	var item = "";

	switch(x) {
		case 1:
			item = "fishcake";
			break;
		case 2:
			item = "chashu";
			break;
		case 3:
			item = "egg";
			break;
		case 4:
			item = "bamboo";
			break;
		case 5:
			item = "onion";
			break;
		case 6:
			item = "seaweed";
			break;
	}

	if (document.getElementById(item).style.visibility == "visible") {
		document.getElementById(item).style.visibility = "hidden";
	}
	else {
		document.getElementById(item).style.visibility = "visible";
	}
}

function displayNoodle(x) {
	
}