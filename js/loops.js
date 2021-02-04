/* make the random number*/
/* store it the random number in value*/

let randomNum = Math.floor((Math.random() * 1) + 100);

/* prompt the user to guess a number*/
/* store that number in a var*/

let userNum = prompt("Guess a number between 1 and 100");

/* create a conditional statement to check the random number against the guessed number */

if ( userNum == randomNum) {
    alert("You guessed correctly! Congrats!")
} else {
    alert(`You guessed incorrectly, the number was: ${randomNum}. Reload the page and try again!`)
