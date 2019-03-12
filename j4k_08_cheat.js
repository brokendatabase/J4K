var pickWord = function () {
// Create an array of words
	var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake",
	"donkey",
	"hazard",
	"random"
	];

	// Pick a random word
	var word = words[Math.floor(Math.random() * words.length)];

	return word;
};

var setupAnswerArray = function (word) {
//Set up the answer array
	var answerArray = [];
	for (var i = 0; i < word.length; i++){
		answerArray[i] = "_";
	}

	return answerArray;
};

var showPlayerProgress = function (answerArray) {
// Show the player their progress
		alert(answerArray.join(' '));
};

var getGuess = function () {
	var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
	return guess;
};

var updateGameState = function (guess, word, answerArray, guessed) {
// Update answerArray and return a number showing how many
// times the guess appears in the word so remainingLetters
// can be updated
for(j = 0; j < word.length; j++){
				if(guess === word[j] && answerArray[j] === "_") {
					answerArray[j] = word[j];
					word[j] = word[j].toUpperCase();
					guessed = true;
					remainingLetters--;
				}
			}


};

var showAnswerAndCongratulatePlayer = function (answerArray, guessed) {
// Use alert to show the answer and congratulate the player
	if (!guessed) {

		alert("Game lost!");
		alert("I'm sorry, you ran out of guesses!");

		} else {

		// Show the answer and congratulate the plaer
		alert(answerArray.join(" "));
		alert("Good job! The answer was " + word);
	}
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var remainingGuesses = word.length;
var guessed = false;

while (remainingLetters > 0 && remainingGuesses > 0) {

	showPlayerProgress(answerArray);
	var guess = getGuess();

	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
		// Update the game state with the guess
		guessed = false;
		var	correctGuesses = updateGameState(guess,word,answerArray);

	if (!guessed){
				remainingGuesses--;
			}
	}
}

showAnswerAndCongratulatePlayer(answerArray, guessed);
