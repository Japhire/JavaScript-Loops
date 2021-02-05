/* make the random number*/
/* store it the random number in value*/

let randomNum = Math.floor((Math.random() * 100) + 1);

/* prompt the user to guess a number*/
/* store that number in a var*/

let userNum = prompt("Guess a number between 1 and 100");

/* create a conditional statement to check the random number against the guessed number */

/*if ( userNum == randomNum ) {
    alert("You guessed correctly! Congrats!")
} else {
    alert(`You guessed incorrectly, the number was: ${randomNum}. Reload the page and try again!`)*/

    //Give user 5 attempts to guess number

console.log(randomNum)

for ( let i = 4; i > 0; i-- ) {
    if ( userNum == randomNum ) {
        alert(`You guessed correctly! Congrats!`);
        break
    } else{
        alert(`You guessed incorrectly, you have ${i} tries left to get it right.`);
        userNum = prompt("Guess a number between 1 and 100");
    }
}
    else if ( userNum > randomNum)
    {
        alert(`You guessed incorectly, your guess was to high. You have ${i} tries left to get it right.`);
        userNum = prompt(" Guess a number between 1 and 100"); 
    }
    else if ( userNum < randomNum)
    {
        alert(`You guessed incorectly, your guess was to low, you have ${i} tries left to get it right.`);
        userNum = prompt("Guess a number between 1 and 100");
    }

