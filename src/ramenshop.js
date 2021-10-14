/*
Navigation
*/

var entered = false;

function showWelcome() {
	document.getElementById("welcome").style.visibility = "visible";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("side_bg").style.visibility = "hidden";
	document.getElementById("topbanner").style.visibility = "hidden";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "hidden";
	document.getElementById("bowl").style.visibility = "hidden";
}

function showPage1() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "visible";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("side_bg").style.visibility = "visible";
	document.getElementById("topbanner").style.visibility = "visible";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "visible";
	document.getElementById("bowl").style.visibility = "visible";

	if(!entered) {
		document.getElementById("shoyu").style.visibility = "visible";
		document.getElementById("shoyu_icon").style.border = "5px solid #d7af70";
		document.getElementById("thinnoodles").style.visibility = "visible";
		document.getElementById("thin_icon").style.border = "5px solid #d7af70";
		entered = true;
	}

}

function showPage2() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "visible";
	document.getElementById("side_bg").style.visibility = "visible";
	document.getElementById("topbanner").style.visibility = "visible";
	document.getElementById("end").style.visibility = "hidden";
	document.getElementById("ramen").style.visibility = "visible";
}

function showEnd() {
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "hidden";
	document.getElementById("side_bg").style.visibility = "hidden";
	document.getElementById("topbanner").style.visibility = "hidden";
	document.getElementById("end").style.visibility = "visible";

	var x = document.getElementsByClassName("ramenbowl");
	for (var i = 0; i < x.length; i++) {
		x[i].style.top = "45%";
    	x[i].style.left = "49%";
    	x[i].style.transform = "translate(-50%, -50%)";
	}
}

function displaySoup(x) {

	document.getElementById("shoyu_icon").style.border = "5px solid #91140b";
	document.getElementById("miso_icon").style.border = "5px solid #91140b";
	document.getElementById("tonkotsu_icon").style.border = "5px solid #91140b";

	switch(x) {
		case 1:
			document.getElementById("shoyu").style.visibility = "visible";
			document.getElementById("shoyu_icon").style.border = "5px solid #d7af70";
			document.getElementById("miso").style.visibility = "hidden";
			document.getElementById("tonkotsu").style.visibility = "hidden";
			break;
		case 2:
			document.getElementById("shoyu").style.visibility = "hidden";
			document.getElementById("miso").style.visibility = "visible";
			document.getElementById("miso_icon").style.border = "5px solid #d7af70";
			document.getElementById("tonkotsu").style.visibility = "hidden";
			break;
		case 3:
			document.getElementById("shoyu").style.visibility = "hidden";
			document.getElementById("miso").style.visibility = "hidden";
			document.getElementById("tonkotsu").style.visibility = "visible";
			document.getElementById("tonkotsu_icon").style.border = "5px solid #d7af70";
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
		document.getElementById(item+"_icon").style.border = "5px solid #91140b";
	}
	else {
		document.getElementById(item).style.visibility = "visible";
		document.getElementById(item+"_icon").style.border = "5px solid #d7af70";
	}
}

function displayNoodles(x) {

	document.getElementById("thin_icon").style.border = "5px solid #91140b";
	document.getElementById("med_icon").style.border = "5px solid #91140b";
	document.getElementById("thick_icon").style.border = "5px solid #91140b";


	switch(x) {
		case 1:
			document.getElementById("thinnoodles").style.visibility = "visible";
			document.getElementById("mednoodles").style.visibility = "hidden";
			document.getElementById("thicknoodles").style.visibility = "hidden";
			document.getElementById("thin_icon").style.border = "5px solid #d7af70";

			break;
		case 2:
			document.getElementById("thinnoodles").style.visibility = "hidden";
			document.getElementById("mednoodles").style.visibility = "visible";
			document.getElementById("thicknoodles").style.visibility = "hidden";
			document.getElementById("med_icon").style.border = "5px solid #d7af70";
			break;
		case 3:
			document.getElementById("thinnoodles").style.visibility = "hidden";
			document.getElementById("mednoodles").style.visibility = "hidden";
			document.getElementById("thicknoodles").style.visibility = "visible";
			document.getElementById("thick_icon").style.border = "5px solid #d7af70";

			break;
	}
}