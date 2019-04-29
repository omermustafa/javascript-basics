//https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements/build-a-random-number-guessing-game
document.write("<h1>A random number guessing game!</h1>");

//Random number generated through function below commented
function getRandomNumber(lower, upper){
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

var correctGuess = false;
var randomNumber = Math.floor((Math.random() * 6) + 1);
var guess = '';
while(guess == ''){
    guess = prompt('I am thinking of number of a number between 1 and 6. What is it?');
}

if (parseInt(guess) === randomNumber) {
    correctGuess = true;
} else if(parseInt(guess) < randomNumber){
    var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;        
    }
} else if(parseInt(guess) > randomNumber){
    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
    if(parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
}


if(correctGuess)
{
    document.write("<p>You guessed the number!</p>");
} else{
    document.write("<p>Sorry, you guess the wrong number. It was " + randomNumber + ".</p>");
}