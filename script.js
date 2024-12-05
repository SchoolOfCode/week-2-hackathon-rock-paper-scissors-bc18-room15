// create a let variable called playerMove that stores a move of their choice (rock, paper, scissors)✅
//create a let variable called computermove that stores either rock, paper or scissors. Use math.random()✅
// create a if else loop to determine winner
//hard-code the variables to check if its working. Use console.log
// Create a function - The variables from before should now be taken in as parameters so that you can call the function with any two moves
// Using `prompt`, get a user-inputted value for the player move.
// Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`.

let playerMove = "rock";
let computerMove = "rock";

if (playerMove === "rock" && computerMove === "rock") {
         console.log("It's a draw!");
}   else if (playerMove === "rock" && computerMove === "paper") {
         console.log("Computer wins!.");
}   else if (playerMove === "rock" && computerMove === "rock"); {
        console.log("Player wins!");
}   else if (playerMove === "paper" && computerMove === "rock"); {
        console.log("Player wins!");
}   else if (playerMove === "paper" && computerMove === "paper"); {
        console.log("It's a draw!");
}   else if (playerMove === "paper" && computerMove === "scissors"); {
        console.log("Computer wins!.");
}   else if (playerMove === "scissors" && computerMove === "rock"); {
        console.log("Computer wins!.");
}   else if (playerMove === "scissors" && computerMove === "paper"); {
        console.log("Player wins!");
}   else if (playerMove === "scissors" && computerMove === "scissors"); {
        console.log("Player wins!");
}   