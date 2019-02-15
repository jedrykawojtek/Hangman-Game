// var name = prompt("What's your name?");
// console.log("Hello " + name);

// alert("Get ready for Hangman!");

// make randomWordPicker function that takes one word out of the array 
// and display it on the screen hidden

// another input field where a player can guess a letter
// - you need to get the value here of that player's input with jQuery

// make a function letterCompare that compares the letter of the input of the player
// with the word that is hidden on the screen
// inside this function body, incorporate logic that checks if the letter of the players input
// is the same as one of the letter in the random word.
// same for if thats not the case
var wordsToGuess = ["brexit", "yellow", "season", "expert", "memory"];
var word="";
var value;
var i=0;
var button = document.getElementById("guessbutton");
button.addEventListener("click", function(){
    checkTheWord();
    doSomething();
});
var newGame = document.getElementById("new-game");
newGame.addEventListener("click", function() {
    choooseRandom();
});


function randomWordPicker () {
   i= Math.floor(Math.random() * wordsToGuess.length) ;
     return i;
}


function choooseRandom () {
    console.log(i)
     word = wordsToGuess[i]
}

function checkTheWord () {
    
      value = document.getElementById("inputfield").value
    if (word.indexOf(value) >= 0 ) {
        return true;
    } else if (word.indexOf(value) < 0) {
        return false;
    }
    
    
}

function doSomething () {
   if (checkTheWord()===false){
       console.log("bad");
   } else {
       console.log("good")
   }
}















// var word = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

// var s;
// var counter = 0;
// var answerArray = [];


// function startGame() {

//     for(i=0; i < word.length; i++) {
//         word[i] = "_";
//     }
//     s = answerArray.join("");

//     document.getElementById("answer").innerHTML = s;
// }




// function guessLetter() {

//     document.getElementById("inputfield").onclick = guessLetter;

//     var inputfield = document.getElementById("inputfield").innerHTML = s;
//     input = inputfield.value;

//       for (i=0; i < word.length; i++) {
//         word = ;
//     }
// }

// function compareLetter() {

// }


   

   // var inputBox = document.getElementById("text");
    // input = inputBox.value;
  // Set up the answer array
// var answerArray = [];

// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }
//   var remainingLetters = word.length;



