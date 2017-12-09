var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {

    //taking in user guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //computer selects random letter
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    //pushing user guess to guesses so far
    guessesSoFar.push(userGuess); 
    
    
    if (userGuess == computerGuess) {
        wins++;
        alert("Great job, you have guess correctly. You Won!");
        //reseting the guesses back to 9 so that the user can play again
        guessesLeft = 9; 
        //removing everything from the guesses so far array
        guessesSoFar.length = 0;
    }
    else if (guessesLeft == 0){
        losses++;
        alert("You didn't guess the correct letter. You lost. Try again.");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        //decrementing the guesses left
        guessesLeft--; 
    }  
    
    //displaying all above in HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;

    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}