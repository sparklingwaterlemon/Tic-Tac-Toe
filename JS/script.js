// <---- DOMS Constants ---->
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


// <---- Constants ---->

const player1 = {
    winConstant: "XXX",
    score: 0,
};
const player2 = {
    winConstant: "OOO",
    score: 0,
};

const allBoxes = [ b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 ]
allBoxes.forEach((element, index) => {
    allBoxes[index].available = true;
    allBoxes[index].marked = "testes";
});

let playerTurn = -1;

// let gameStatus = "";

// 0 to 9 @ 9 with no winner - game tied
let turnNumber;

allBoxes.forEach((element,index) => {
    allBoxes[index].addEventListener("click", isBoxAvailable)
});

// <---- Functions ---->

isBoxAvailable