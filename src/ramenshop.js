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

	var x = document.getElementsByClassName("ramenbowl");
	for (var i = 0; i < x.length; i++) {
		x[i].style.top = "45%";
    	x[i].style.left = "49%";
    	x[i].style.transform = "translate(-50%, -50%)";
	}
}

function displaySoup(x) {

	switch(x) {
		case 1:
			document.getElementById("shoyu").style.visibility = "visible";
			document.getElementById("miso").style.visibility = "hidden";
			document.getElementById("tonkotsu").style.visibility = "hidden";
			break;
		case 2:
			document.getElementById("shoyu").style.visibility = "hidden";
			document.getElementById("miso").style.visibility = "visible";
			document.getElementById("tonkotsu").style.visibility = "hidden";
			break;
		case 3:
			document.getElementById("shoyu").style.visibility = "hidden";
			document.getElementById("miso").style.visibility = "hidden";
			document.getElementById("tonkotsu").style.visibility = "visible";
			break;
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

function displayNoodles(x) {
	switch(x) {
		case 1:
			document.getElementById("thinnoodles").style.visibility = "visible";
			document.getElementById("mednoodles").style.visibility = "hidden";
			document.getElementById("thicknoodles").style.visibility = "hidden";
			break;
		case 2:
			document.getElementById("thinnoodles").style.visibility = "hidden";
			document.getElementById("mednoodles").style.visibility = "visible";
			document.getElementById("thicknoodles").style.visibility = "hidden";
			break;
		case 3:
			document.getElementById("thinnoodles").style.visibility = "hidden";
			document.getElementById("mednoodles").style.visibility = "hidden";
			document.getElementById("thicknoodles").style.visibility = "visible";
			break;
	}
}