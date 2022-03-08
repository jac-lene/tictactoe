//Build out a 3x3 grid with clickable squares.
    

// When a user clicks on a square, mark the square with the current user's token (alternating with each click). You can add an X or an O or some other marker that corresponds to the current player.

// Once a square has been marked, a user should not be able to click it again to change it.

// Have a message somewhere in your UI to show who the current player is (i.e. Player 1 turn or Player 2 turn)

// Below your 3x3 grid, you should have a 'reset' button that will reset the game.

// Board
    //Organize into rows and columns
    //Center an X or O correctly
    //Add event listener clicks and check if they work
    //Alert after player moves of next player's turn

//User Input
    //Is notified of turn
    //Can click div to assign their X or O
    //Can reset the game at any point
    //Can only move if their turn


//Overall game function
    //HTML showing who's turn it is
    //Announces a tie
    //keeps count of even and odd turns to announce player
    //Can't click on occupied square    
    //Can only click once

let squares = document.querySelectorAll(".squares")
let turns = 0
let alerted = false

let sq1 = document.querySelector(".sq1")
let sq2 = document.querySelector(".sq2")
let sq3 = document.querySelector(".sq3")
let sq4 = document.querySelector(".sq4")
let sq5 = document.querySelector(".sq5")
let sq6 = document.querySelector(".sq6")
let sq7 = document.querySelector(".sq7")
let sq8 = document.querySelector(".sq8")
let sq9 = document.querySelector(".sq9")

function isEmpty(element) {
    return element.innerHTML === ""
}



//Player Click
squares.forEach(square => {square.addEventListener('click', (event) => {
    if (isEmpty(event.target) === true) {
        if (turns % 2 === 0) {
        turns++;
        console.log(turns);
        // event.target.clicked = true;
        event.target.innerHTML = "X";
        document.querySelector(".turn").innerHTML = ``;
        console.log(event.target.innerHTML)
        } 
        else {
        turns++;
        console.log(turns);
        event.target.innerHTML = "O"; 
        document.querySelector(".turn").innerHTML = ``;
        console.log(event.target.innerHTML);
       } 
    }

function xWinConditions() {
    //columns
    if ((sq1.innerHTML === "X" && sq4.innerHTML === "X" && sq7.innerHTML === "X") || (sq2.innerHTML === "X" && sq5.innerHTML === "X" && sq8.innerHTML === "X") || (sq3.innerHTML === "X" && sq6.innerHTML === "X" && sq9.innerHTML === "X")) {
        alert("X wins!");
        alerted = true;
        document.location.reload();
    }
    //rows
    if ((sq1.innerHTML === "X" && sq2.innerHTML === "X" && sq3.innerHTML === "X") || (sq4.innerHTML === "X" && sq5.innerHTML === "X" && sq6.innerHTML === "X") || (sq7.innerHTML === "X" && sq8.innerHTML === "X" && sq9.innerHTML === "X")) {
        alert("X wins!")
        alerted = true;
        document.location.reload();
    }
    //diagonals
    if ((sq1.innerHTML === "X" && sq5.innerHTML === "X" && sq9.innerHTML === "X") || (sq3.innerHTML === "X" && sq5.innerHTML === "X" && sq7.innerHTML === "X")) {
        alert("X wins!")
        alerted = true;
        document.location.reload();
    }
    
    }
xWinConditions()

function oWinConditions() {
    //columns
    if ((sq1.innerHTML === "O" && sq4.innerHTML === "O" && sq7.innerHTML === "O") || (sq2.innerHTML === "O" && sq5.innerHTML === "O" && sq8.innerHTML === "O") || (sq3.innerHTML === "O" && sq6.innerHTML === "O" && sq9.innerHTML === "O")) {
        alert("O wins!")
        alerted = true;
        document.location.reload();
    }
    //rows
    if ((sq1.innerHTML === "O" && sq2.innerHTML === "O" && sq3.innerHTML === "O") || (sq4.innerHTML === "O" && sq5.innerHTML === "O" && sq6.innerHTML === "O") || (sq7.innerHTML === "O" && sq8.innerHTML === "O" && sq9.innerHTML === "O")) {
        alert("O wins!")
        alerted = true;
        document.location.reload();

    }
    //diagonals
    if ((sq1.innerHTML === "O" && sq5.innerHTML === "O" && sq9.innerHTML === "O") || (sq3.innerHTML === "O" && sq5.innerHTML === "O" && sq7.innerHTML === "O")) {
        alert("O wins!")
        alerted = true;
        document.location.reload();
    }
    
    }
oWinConditions()

function tieConditions() {
    if (isEmpty(sq1) === false && isEmpty(sq2) === false && isEmpty(sq3) === false && isEmpty(sq4) === false && isEmpty(sq5) === false && isEmpty(sq6) === false && isEmpty(sq7) === false && isEmpty(sq8) === false && isEmpty(sq9) === false && alerted === false) { 
        alert("we have a tie!")
    }
}
tieConditions()

})}
)


//Reset Button
document.querySelector(".reset").addEventListener('click', (event) => {
    console.log("reset");
    squares.forEach(square => {square.innerHTML = null});
    turns = 0;
    clicked = false;
    document.querySelector(".turn").innerHTML = 'X starts the game!'
})
