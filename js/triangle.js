console.log("connected")
/* ask the user to enter a value*/
/* validate if the input is a number*/
/* if value isn't a number ask user to enter a number*/

let userNum = prompt("Give me a number")
while(isNaN(userNum)){
    userNum = prompt("Give me a number")
}

// count from 1 to user's input
// print to webpage a line of characters matching the current count

//print right side up triangle
 for(let i=1; i<=userNum; i++){
    for( j=1; j<=i; j++){
        document.write('*')
   }
   document.write('<br>')
}

//print upside down triangle
for(let i=1; i<=userNum; i++){
    for( j=userNum; j >= i ; j--){
        document.write('*')
   }
   document.write('<br>')
}