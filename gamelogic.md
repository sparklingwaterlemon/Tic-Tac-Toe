< HTML >
	9 Boxes with Tags

	[new game button]
	DOM new game button click = resetGame();

< JavaScript>
<—Constants—>

(1)	const player1 = {
			winsConstant: xxx
			score: 
			}

(2) 	const box1 = {
			available: yes/no,
			marked: X/O,	
}

(3) playerTurn = [“1”]

(4) gameStatus = [“”]
(5) numberOfTurns = [0 to 9]
<—Functions—>



Lets say we clicked on box 1…
(A)	DOM.onClick = run function (A-1) checkToSeeIfBoxAvailable();
	

(A-1) checkToSeeIfBoxAvailable();
		if available box value is 1 or NOT AVAILABLE
		—> do nothing

		if box value is 0 
		function update values
		—> change available box value to 1 or not available
		// will later determine if it’s a draw or not
		—> update numberOfTurns +1
		(A-1-B) run function determinePlayerTurn


(A-1-B) function determinePlayerTurn:
		
		if playerTurn is positive
			—> mark X; (DOM mark square.innerTEXT to have an image X or O)
			—> (A-1-B-1) run function didPlayer1Win();
		if playerTurn is negative
			—> than mark O;
			—> (A-1-B-2) run function didPlayer2Win();
		

(A-1-B-1) didPlayer1Win(); 
		b1 + b2 + b3
		if box1.winningValue + box2.winningValue + box3.winningValue =
		player1.winsConstant 
		// if YES
		run function yesPlayer1Won!

		// if NO

			if numberOfTurn = 9
			// if YES
			run function itsAdraw
			
			// if NO
			update playerTurn value by * -1;
			—> change player
			highlight box player 2 (can be determined by const playerTurn)
		
		
 function Player1Wons
	alert! Player 1 wins
	update player score
	highlight “play again”



 (A-1-B-2) run function didPlayer2Win();
		b1 + b2 + b3
		if box1.winningValue + box2.winningValue + box3.winningValue =
		player2.winsConstant 
		// if YES
		run function yesPlayer2Won!

		// if NO

			if numberOfTurn = 9
			// if YES
			run function itsAdraw
			
			// if NO
			update playerTurn value by * -1;
			—> change player
			highlight box player 1 (can be determined by const playerTurn)

		if box1.winningValue + box2.winningValue + box3.winningValue =
		player2.winsConstant (A1B1D) run function player2wins
		
 function Player2Wons
	alert! Player 2 wins
	update player score
	highlight “play again”







“play again” button onclick = reset

clear all boxes b1 - b9 = “”;
Clear all number of turns = “’
Clear all squares from inner.HTML = <empty>

In this version - player 1 always goes first




				 




















		