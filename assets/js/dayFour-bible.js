function lightOn(){
	document.body.style.backgroundColor = "#FFFFFF";
	document.body.style.color = "#000000";
	document.getElementById("ps3").style.color="yellow";
	document.getElementById("ps5").style.color="yellow";
	document.getElementById("title").style.color="#000000";
	document.getElementById("subtitle").style.color="#000000";
	document.getElementById("switchOff").style.opacity="100%";
	$(this).siblings('.psalmImg').css("opacity", "1.0");
}
