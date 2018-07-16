function hideBulb(){
	var x = document.getElementById("bulb");
	var displaySetting=x.style.display;
	var lightSwitch=document.getElementById("button");

	if(displaySetting=="block"){
		x.style.display="none";
		lightSwitch.innerHTML="Let there be light!";
	}else{
		x.style.display="block";
		lightSwitch.innerHTML="Turn off the light";
		document.body.style.backgroundColor="#FFFFFF";
		document.body.style.color = "#000000";
		document.getElementById("ps3").style.color="yellow";
		document.getElementById("ps5").style.color="yellow";
		document.getElementById("title").style.color="#000000";
		document.getElementById("subtitle").style.color="#000000";
	}
}
