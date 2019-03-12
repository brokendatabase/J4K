/*
let ourFirstFunction = function() {
  console.log("Hello World");
};

var sayHelloTo = function(name) {
  console.log("Hello " + name + "!");
};
sayHelloTo("Dampness");

// draw Cats, use argument to define how many:
var drawCats = function(howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
}


// this one takes two arguments, what to draw and how many howManyTimes

var printMultipleTimes = function(howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + "()" + whatToDraw); // here i is for list numbering, and " " is just a separator
  }
};
printMultipleTimes(5, "===o");

5 + Math.floor(1.2345); // 6 Math.Floor is a function that returns the number you pass to it, rounded down to the nearest whole number

var double = function(number) {
  return number * 2;
};
double(14); // 28


// FUCTION CALLS AS VALUES
double(5) + double(6); //22

double(double(3)); // 12



// PICK RANDOMWORDS FUNCTION
var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Planet", "Worm", "Flower", "Computer"];

pickRandomWord(randomWords);

// can pass an array as an argument right away

var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};
pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);



// Recreating insult generator as a function
// original code:
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
randomString;

// AS A function
var picksRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// join all the random strings into a sentence:
var randomString = "Your " + picksRandomWord(randomBodyParts) + " is like a " + picksRandomWord(randomAdjectives) + " " + picksRandomWord(randomWords) + "!!!";
randomString;

// COMPLETE VERSION:
function pickedRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
};

function generateRandomInsult() {
  var randomBodyParts = ["Face", "Nose", "Hair"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
  // Join all the random strings into a sentence:
  var randomString = "Your " + pickedRandomWord(randomBodyParts) + " is like a " + pickedRandomWord(randomAdjectives) + " " + pickedRandomWord(randomWords) + "!!!";
  // the pickedRandomWord function here takes words as an argument, and words have that random selection array, so once you bring it into the generateRandomInsult function it uses the words methods to select a random word from the associated arrays (body parts, adjectives, etc.)
  return randomString; // here it puts together the resulted variable
};
generateRandomInsult();
console.log(generateRandomInsult()); // cmd+i doesn't work when you declare functions as var = function (soandso)


// USING return to exit function early:

var fifthLetter = function(name) {
  if (name.length < 5) {
    return; // the function will exit if the name is shorter than 5 letters
  }
  return "The fifth letter of your name is " + name[4] + ".";
};
fifthLetter("Bob"); // bob will return undefined, billy will return 'y'


// YOU CAN USE RETURN instead of if... else statements:

var medalForScore = function(score) {
  if (score < 3) {
    return "Bronze"; // the function would exit here if the score is less than three
  }
  if (score < 7) {
    return "Silver"; // but if it isn't it will continue, and will exit here if the score is less than seven
  }
  return "Gold" // and if the score is above seven it will reach this bit
};
medalForScore(1);


// EXERCISE 01

function multiply(a, b) {
  return a * b;
};

function add(c, d) {
  return c + d;
};
add(multiply(36325, 9824), 777);


// EXERCISE 02

function areArraysSame(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    } else if (array1.length != array2.length) {
      return false;
    } else return true;
  }
};
areArraysSame([1, 2, 3], [1, 2, 3]);
*/

// EXERCISE 03 Hangman with functions



// all the functions to specify:
function pickWord(word) {
  var words = ["monkey", "crocodile", "hippopotamus", "giraffe", "pterodactyl"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word; // Return a random word
};
pickWord(word);

function setupAnswerArray(word) {
  var answerArray = []; // this is the "_ _ _ _ _" of the game, it's as long as the word, thanks to the loop below
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

function showPlayerProgress(answerArray) {
  alert(answerArray.join(' ')); // Use alert to show the player their progress
};

function getGuess() {
  var guess = prompt("Guess a letter, or click cancel to stop playing.").toLowerCase(); // we take a guess from the user and save it as a variable 'guess'
  return guess;
};

function updateGameState(guess, word, answerArray) {
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      answerArray[j] = guess;
      remainingLetters--;

    }
  }
  remainingGuesses--;

};

function showAnswerAndCongratulatePlayer(answerArray) {
  if (remainingGuesses < 1) {
    alert("You ran out of guesses");
  } else {
    alert(answerArray.join(" ")); // turn our array into a string for the pop-up message
    alert("Good job! The answer was " + word);
  };
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var remainingGuesses = 10;

while (remainingLetters > 0 && remainingGuesses > 0) {

  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
  }
}
showAnswerAndCongratulatePlayer(answerArray);
