// create a let variable called playerMove that stores a move of their choice (rock, paper, scissors)✅
//create a let variable called computermove that stores either rock, paper or scissors. Use math.random()✅
// create a if else loop to determine winner ✅
//hard-code the variables to check if its working. Use console.log ✅
// Create a function - The variables from before should now be taken in as parameters so that you can call the function with any two moves ✅ 
// Using `prompt`, get a user-inputted value for the player move.✅
// Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`. ✅
// Ensure math.random() generates into randow rock, paper, scissors and not literal numbers. ✅
// Create an array which stores 3 values (rock, paper and scissors). Console.log ✅
// use math.random to access an index of that array. ✅
// Create a function to call in the console that runs the game, instead of the prompt appearing immediately ✅
// Create a while loop and confirm to play the game indefinitely until the player wants to stop ✅
        //confirm what player wants to do ✅
        //put result of confirm into a variable ✅
        //while loop that checks if variable is true or false ✅
// Whilst testing the game, noticed player input only accepts exact match to condition 
//Keep track of how many games have been played, as well as the number of wins, losses, and draw
// create variable gamesPlayed, losses, wins, draws. 
//information needs to be displayed after every round. 



function getWinner(playerMove, computerMove) {

        if (playerMove === computerMove) {
                return 0;
       }   else if (playerMove === "rock" && computerMove === "paper") {
                return -1;
       }   else if (playerMove === "rock" && computerMove === "scissors") {
                return 1;
       }   else if (playerMove === "paper" && computerMove === "rock") {
                return 1;
       }   else if (playerMove === "paper" && computerMove === "scissors") {
                return -1;
       }   else if (playerMove === "scissors" && computerMove === "rock") {
                return -1;
       }   else if (playerMove === "scissors" && computerMove === "paper") {
                return 1;
       }     
}

let gamesPlayed =  0;
let wins = 0;
let losses = 0;
let draw = 0;

function  playGame() {

let continueGame = true;

while (continueGame === true) {

let playerMove = prompt(`Type "rock", "paper" or "scissors"`).toLowerCase();
let moves = ["rock", "paper", "scissors"];
let randomMove = moves[Math.floor(Math.random() * 3)];
let result = getWinner(playerMove, randomMove);     

        
if (result === 0) {
        alert("It's a draw");
        ++draw ; 
        ++gamesPlayed;
} else if (result === 1) {
        alert("Player wins");
        ++wins ; 
        ++gamesPlayed;
} else if (result === -1) {
        alert("Computer wins");
        ++losses ; 
        ++gamesPlayed;
};

continueGame = confirm("Would you like to continue?");
}
}


//let score = gamesPlayed + wins + losses + draw;
//alert(score);
//we were working on alerting the score. However, it was not functioning as intended. 