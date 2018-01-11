function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i=0;i<6;i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}
	
function changeColor(){
		document.getElementById("background").style.backgroundColor = getRandomColor();
}

function fontColor(){
	document.getElementById("yellow").style.color = getRandomColor();
}

function returnColor(){
	document.getElementById("yellow").style.color = "#000000";
}