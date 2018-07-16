// Select color input
let color = document.querySelector('#colorPicker');
// Select size input
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
let canvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
document.querySelector('form').addEventListener('submit', function(evt) {
	evt.preventDefault();
	makeGrid();
});

function makeGrid() {
	//remove any existing canvas
	while (canvas.hasChildNodes()) {
		canvas.removeChild(canvas.lastChild);
	}
	for (let i = 0; i < height.value; i++) {
		const row = document.createElement('tr');
		canvas.appendChild(row);
		for (let x = 0; x < width.value; x++) {
			const col = document.createElement('td');
			row.appendChild(col);
		}
	}
	canvas.addEventListener('click', function(e) {
		e.target.style.backgroundColor = color.value;
	});
}
