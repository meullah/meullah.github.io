let getRendomColors = (num)=>{

	let temp =[];
	let str = "";
	for(let i=0; i<num;i++){
		let r = (Math.floor(Math.random() * 256));
		let g = (Math.floor(Math.random() * 256));
		let b = (Math.floor(Math.random() * 256));

		str = `rgb(${r}, ${g}, ${b})`;
		temp.push(str);
	}
	return temp;
}


// message span
let message = document.getElementById("message");
// tile Guess Color
let ColorGuess = document.getElementById("RGB_color");
//h1
let h1 = document.getElementById("title");
//New Colors Button
let btn_reset = document.getElementById("reset");
//easy Button
let btn_easy = document.getElementById("easy");
//hard  Button
let btn_hard = document.getElementById("hard");

btn_hard.style.backgroundColor = "steelblue";
btn_hard.style.color = "white";
btn_easy.style.backgroundColor = "white";
btn_easy.style.color = "steelblue";
let difficulty = 6;
let colors = [];
let boxes= document.querySelectorAll(".box");
colors  = getRendomColors(difficulty);

let random = (Math.floor(Math.random() * difficulty));
let actualColor = colors[random];
ColorGuess.textContent = actualColor;


let reset = (difficulty)=>{
	let c =[]
	c  = getRendomColors(difficulty);
	for (let i=0; i<boxes.length;i++) {

		boxes[i].style.backgroundColor = c[i]
	}

	let r = (Math.floor(Math.random() * difficulty));
	actualColor = c[r];
	ColorGuess.textContent = actualColor;
	btn_reset.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
}

for (let i=0; i<boxes.length;i++) {
	
	boxes[i].addEventListener("click",function(){
		if(boxes[i].style.backgroundColor === actualColor ){
			for (let i=0; i<boxes.length;i++){
				boxes[i].style.backgroundColor = actualColor;
				message.textContent = "Correct!";
				btn_reset.textContent = "Play Again?";
			}
			h1.style.backgroundColor = actualColor;
			if(difficulty<5){
				boxes[3].style.backgroundColor = "#232323";
				boxes[4].style.backgroundColor = "#232323";
				boxes[5].style.backgroundColor = "#232323";
			}
		}
		else{
			boxes[i].style.backgroundColor = "#232323";
			message.textContent = "Failed!"
		}

	});

	boxes[i].style.backgroundColor = colors[i]
}


btn_easy.addEventListener("click",function(){
	btn_hard.style.backgroundColor = "white";
	btn_hard.style.color = "steelblue";

	btn_easy.style.backgroundColor = "steelblue";
	btn_easy.style.color = "white";
	difficulty = 3;
	reset(difficulty);
	boxes[3].style.backgroundColor = "#232323";
	boxes[4].style.backgroundColor = "#232323";
	boxes[5].style.backgroundColor = "#232323";

});

btn_hard.addEventListener("click",function(){
	btn_hard.style.backgroundColor = "steelblue";
	btn_hard.style.color = "white";
	btn_easy.style.backgroundColor = "white";
	btn_easy.style.color = "steelblue";
	difficulty = 6;
	reset(difficulty);
});

btn_reset.addEventListener("click",function(){
	reset(difficulty);
	if(difficulty<5){
		boxes[3].style.backgroundColor = "#232323";
		boxes[4].style.backgroundColor = "#232323";
		boxes[5].style.backgroundColor = "#232323";
	}
});

