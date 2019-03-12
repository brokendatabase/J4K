var words = ["javascript", "monkey", "amazing", "pancake", "crocodile", "lazer", "invertebrae"]; // words to guess
var word = words[Math.floor(Math.random() * words.length)]; // pick a random word to guess
var answerArray = []; // this is the "_ _ _ _ _" of the game, it's as long as the word, thanks to the loop below
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length; // every time the player guesses a correct letter this value will be decremended by 1 for each instance of that letter in the word

// THE GAME LOOP
while (remainingLetters > 0) {
  alert(answerArray.join(" ")); // we show the player current progress by joining elements of answerArray into a string

  // player's input:
  var guess = prompt("Guess a letter, or click cancel to stop playing."); // we take a guess from the user and save it as a variable 'guess'
  guess = guess.toLowerCase();
  if (guess === null) {
    break; // if user presses cancel
  } else if (guess.length !== 1) {
    alert("Please enter a single letter."); // if the field is empty or there are too many letters
  } else {
    // update the state of the game with the guess
    for (var j = 0; j < word.length; j++) { // this loop checks every letter in the guessed word, word[0] is m, word[1] is o, word[2] is n, etc.
      if (word[j] === guess && answerArray[j] === "_") { // if any letter of the string 'word' is equal to player's guess
        answerArray[j] = guess; //place that letter into the answerArray
        remainingLetters--; // this string will get 1 letter shorter
      } // this works because the looping variable j can be used as an index for 'answerArray' just as it can be used as an index for 'word' (see below)
      // so if we guess a, word[0] will return false, because p is not === guess, but word[1] will be true, because a in 'pancake' === a in 'guess', and the array now looks like ["_", "a", "_", "_", "_", "_", "_",], once it reaches word[4] the statement is true again, therefore ["_", "a", "_", "_", "a", "_", "_",]
    }
  }
}
alert(answerArray.join(" ")); // turn our array into a string for the pop-up message
alert("Good job! The answer was " + word);

/*
Index(j)
  0    1    2    3    4    5    6
word
 "p    a    n    c    a    k    e"
answerArray
["_", "_", "_", "_", "_", "_", "_", ]
*/
