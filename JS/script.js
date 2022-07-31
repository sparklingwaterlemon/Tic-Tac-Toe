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
    "winConstant": "XXX",
    "score": 0,
};
const player2 = {
    "winConstant": "OOO",
    "score": 0,
};
let playerTurn = 1;
let turnNumber = 0;

const allBoxes = [ b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 ]

// for( let i = 0 ; i < allBoxes.length ; i++){
//     allBoxes[i].available = true;
//     allBoxes[i].mark = 1;
// };

b1 = {
    available : true,
    mark : "PP"
};
b2 = {
    available : true,
    mark : "PP"
};
b3 = {
    available : true,
    mark : "PP"
};
b4 = {
    available : true,
    mark : "PP"
};
b5 = {
    available : true,
    mark : "PP"
};
b6 = {
    available : true,
    mark : "PP"
};
b7 = {
    available : true,
    mark : "PP"
};
b8 = {
    available : true,
    mark : "PP"
};
b9 = {
    available : true,
    mark : "PP"
};

const winningCombo = [
    [ b1.mark , b2.mark , b3.mark],
    [ b4.mark , b5.mark , b6.mark],
    [ b7.mark , b8.mark , b9.mark],
    [b1.mark , b4.mark , b7.mark],
    [b2.mark , b5.mark , b8.mark],
    [b3.mark , b6.mark , b9.mark],
];

// <---- TEST ---->
//TEST
let testLine = document.getElementById("test-line");
function testFunction(){
    testLine.innerText = Math.floor(Math.random()*20);
};
function testWinning(){
    testLine.innerText = "IT WORKS!! WOWOWOWOW!";
};



// <---- First Move CLICK BOX ---->
// Determining wheter the box you clicked is available (not X'ed or O'ed)
for( let i = 0 ; i < allBoxes.length ; i++){
    allBoxes[i].addEventListener("click" , function checkAvailable(){
        if(allBoxes[i].available = true){
            allBoxes[i].avaible = false;
        }
        determineXorO();
    })
};

b1.innerText =


// function // Determining Player and whether to mark X or O
// if(playerTurn > 0){
//     allBoxes[i].innerText = "X";

//     console.log(
    
//     allBoxes[i]["mark"] = "X";
// } else {
//     allBoxes[i].innerText = "O";
//     allBoxes[i].mark = "O";
// };
// testFunction();
// // didYouWin();
// })

// console.log(b1.mark);
// b1.mark = "TEST";
// console.log(b1.mark);