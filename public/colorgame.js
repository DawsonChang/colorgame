let colorNum = 6;
let colors = generateRandomColor(colorNum);
let squares = document.querySelectorAll(".square");
let pickedColor = pick();
const colorDisplay = document.getElementById("colorDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const h1 = document.querySelector("h1");
const reset = document.getElementById("reset");
const modeBtn = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function() {
	restart();
});

for (let i = 0; i < modeBtn.length; i++) {
	modeBtn[i].addEventListener("click", function() {
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? colorNum = 3 : colorNum = 6;
		restart();
	});
}

for(let i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			resultDisplay.textContent = "Correct!!!";
			changeToClickedColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			resultDisplay.textContent = "Wrong!";
		}
	});
}

function changeToClickedColor(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pick() {
	let color = Math.floor(Math.random() * colors.length);
	return colors[color];
}

function generateRandomColor(num) {
	var colors = []
	for(let i = 0; i < num; i++) {
		let s = "";
		let r1 = (Math.floor(Math.random() * 256));
		let r2 = (Math.floor(Math.random() * 256));
		let r3 = (Math.floor(Math.random() * 256));
		s = "rgb(" + String(r1) + ", " + String(r2) + ", " + String(r3) + ")";
		colors.push(s);
	}
	return colors;
}

function restart() {
	colors = generateRandomColor(colorNum);
	pickedColor = pick();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	resultDisplay.textContent = "";
}