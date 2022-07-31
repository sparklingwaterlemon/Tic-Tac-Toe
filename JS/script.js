
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let button = document.querySelector("button");


const player1 = {
    "winConstant": "XXX",
    "score": 0,
};
const player2 = {
    "winConstant": "OOO",
    "score": 0,
};
let playerTurn = 1;
let turnNumber = 0;
let gameStatus = 1;

let allBoxes = [ b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 ]

for ( let box of allBoxes){
    box.setAttribute("mark", "nothing-yet");
    box.setAttribute("avail", "yes");
};

console.log(b1.getAttribute("mark"));
// this shits not working here but fix later
// const winningCombo = [
//     [ b1.getAttribute("mark") , b2.getAttribute("mark") , b3.getAttribute("mark") ],
// ];


// TEST
let testLine = document.getElementById("test-line");
function testFunction(){
    testLine.innerText = Math.floor(Math.random()*20);
};
// function testWinning(){
//     testLine.innerText = "IT WORKS!! WOWOWOWOW!";
// };



// FIRST CLICK - CHECK AVAIL

for (let b of allBoxes){
    b.addEventListener("click", function checkAvail(){
			if(b.getAttribute("avail") === "yes"){
				b.setAttribute("avail" , "no");
				determinePlayerTurn(b);
			}
		})
};



function determinePlayerTurn(box){
    if(gameStatus > 0){
	    if(playerTurn > 0){
		    box.innerText = "X";
		    box.setAttribute("mark", "X");
	    } else {
		    box.innerText = "O";
		    box.setAttribute("mark", "O");
	    }
	    didYouWin();
    }
};


function didYouWin(){
	if(b1.getAttribute("mark") + b2.getAttribute("mark") + b3.getAttribute("mark") === "XXX" ||
		 b1.getAttribute("mark") + b2.getAttribute("mark") + b3.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b4.getAttribute("mark") + b5.getAttribute("mark") + b6.getAttribute("mark") === "XXX" || 
						b4.getAttribute("mark") + b5.getAttribute("mark") + b6.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b7.getAttribute("mark") + b8.getAttribute("mark") + b9.getAttribute("mark") === "XXX" || 
						b7.getAttribute("mark") + b8.getAttribute("mark") + b9.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b1.getAttribute("mark") + b4.getAttribute("mark") + b7.getAttribute("mark") === "XXX" || 
						b1.getAttribute("mark") + b4.getAttribute("mark") + b7.getAttribute("mark") === "OOO"){
		alertWinner();
	}	else if(b2.getAttribute("mark") + b5.getAttribute("mark") + b8.getAttribute("mark") === "XXX" || 
						b2.getAttribute("mark") + b5.getAttribute("mark") + b8.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b3.getAttribute("mark") + b6.getAttribute("mark") + b9.getAttribute("mark") === "XXX" || 
						b3.getAttribute("mark") + b6.getAttribute("mark") + b9.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b1.getAttribute("mark") + b5.getAttribute("mark") + b9.getAttribute("mark") === "XXX" || 
						b1.getAttribute("mark") + b5.getAttribute("mark") + b9.getAttribute("mark") === "OOO"){
		alertWinner();
	} else if(b7.getAttribute("mark") + b5.getAttribute("mark") + b3.getAttribute("mark") === "XXX" || 
						b7.getAttribute("mark") + b5.getAttribute("mark") + b3.getAttribute("mark") === "OOO"){
		alertWinner();
	} else {
		endTurn();
	}
};

console.log(playerTurn);

function endTurn(){
	(playerTurn *= -1);
	console.log(playerTurn);
};		

function alertWinner(){
    gameStatus -= 1;
	if( playerTurn > 0){
		testLine.innerText = "Player 1 wins"
	} else {
		testLine.innerText = "Player 2 wins"
	}
};

button.addEventListener("click", function reset(){
    playerTurn = 1;
    turnNumber = 0;
    gameStatus += 1;
    testLine.innerText = "Results";
    for(let i = 0 ; i < allBoxes.length ; i++){
        allBoxes[i].innerText = ("B" + (i+1));
        allBoxes[i].setAttribute("mark", "nothing-yet");
        allBoxes[i].setAttribute("avail", "yes");
    }
});