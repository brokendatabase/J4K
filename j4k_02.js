// arrays

var dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];
dinosaurs[3];

// change values in an array:

dinosaurs[0] = "Tyrannosaurus Rex";
dinosaurs;

// you can also create an empty array and fill it with indexed positions:

var dinosaurs = [];
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";
dinosaurs[33] = "Philosoraptor"; // empty x 24

dinosaurs;

// arrays can contain anything including other arrays:
var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// to access an element in the inner array use second set of square brackets:
dinosaursAndNumbers[2]; // ["triceratops", "stegosaurus", 3627.5]
dinosaursAndNumbers[2][0]; // "triceratops"

dinosaurs.length; // 34

// easy way to access the last element in an array however long that array is:
dinosaurs[dinosaurs.length - 1]; // Philosoraptor

// length is being counted from 1, not zero


// call .push method to add elements to an array

var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
animals;
animals.length;

// call .unshift(element) to add elements to the beginning of an array:

animals.unshift("Monkey");
animals.unshift("Polar Bear");
animals[0]; // polar bear
animals;

// to remove animals from an array, add .pop() to the end of the array name. .pop() also returns the removed element of the array as a value:

var lastAnimal = animals.pop(); // create a variable for the method
lastAnimal; // Llama;
animals; // Polar bear, monkey, cat, dog
animals.pop(); // dog, but here it isn't saved as a value
animals; // Polar bear, monkey, cat
animals.unshift(lastAnimal); // add Llama as first animal in the array
animals; // ["Llama", "Polar Bear", "Monkey", "Cat"]

// to remove and return first element of an array, use .shift()

var firstAnimal = animals.shift();
firstAnimal; // this takes away the first animal ("Llama") and stores it in the firstAnimal variable
animals; // now this array only has three animals

// unshift and shift to add items to the beginning of an array
// push and pop to add and remove items from the endo of an array

//.concat to add two arrays together: firstArray.concat(otherArray) this will put firstArray in front of the otherArray
var furryAnimals = ["Alpaca", "Lemur", "Yeti"];
var scalyAnimals = ["Boa", "Godzilla"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals; // ["Alpaca", "Lemur", "Yeti", "Boa", "Godzilla"]

// this method keeps both original arrays unchanged.

// join multiple arrays by putting them inside the parentheses after .concat, separated by commas:

var furryAnimals = ["Alpaca", "Lemur", "Yeti"];
var scalyAnimals = ["Boa", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals; // ["Alpaca", "Lemur", "Yeti", "Boa", "Godzilla", "Macaw", "Dodo"]

// find the index of an element in an array - indexOf(element)

var colors = ["red", "green", "blue"];
colors.indexOf("blue"); // 2
colors[2]; // blue, reverse of the method above
colors.indexOf("purple"); // if the item is not in the array, JS returns -1

//! if the element appears more than once in the array, the indexOf method will return the first index of that element in the array

//.join() method is to turn an array into string

var boringAnimals = ["Monkey", "Cat", "Fish", "Lisard"];
boringAnimals.join(); // "Monkey,Cat,Fish,Lisard"

// it's separated by commas by default, but inside the parentheses you can define your own separator (it must be a string):

var boringAnimals = ["Monkey", "Cat", "Fish", "Lisard"];
boringAnimals.join(" sees " ); // "Monkey sees Cat sees Fish sees Lisard"


var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");

// if the values in the array are not strings, .join() will convert them to a string:
var ages = [11, 14, 79];
ages.join(" ");

// build array with .push

var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");

// pop the items one by one
landmarks.pop(); // "My friend's house"
landmarks.pop(); // "My old school"
landmarks.pop(); // "Cat rescue center"
landmarks.pop(); // "Fire station"
landmarks.pop(); // "Leaky fire hydrant"
landmarks.pop(); // "Flickering streetlamp"
landmarks.pop(); // "Front path"
landmarks.pop(); // "My house"

// this is popping a stack, last in, first out (LIFO), the opposite of that is FIFO — first in, first out, like a queue in a bank

// using Math.random(), which returns a random number between 0 and 1:
Math.random(); // 0.5061151622524851

//if you want a bigger number,multiply Math.random() by 10:
Math.random() * 10; // 4.6063832696507685

// we cannot use these numbers as array indexes, because indexes have to be whole numbers. to fix that we use Math.floor:

Math.floor(3.3235235); // 3
Math.floor(9.99999); // 9 - it always rounds up to the number below the fraction

// so now you can use Math methods to pick a random number from an array:

Math.floor(Math.random() * 4); // this will return any integer between 0 and 4 (never 4 itself though)

var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex]; // here we call a number from the randomWords array generated by randomIndex randomiser

// the randomIndex variable isn't even necessary here:
randomWords[Math.floor(Math.random() * 4)];


// Complete decision maker:
var phrases = [
  "Thank sounds good",
  "Yes, you should definitely do that",
  "I'm not sure it's a great idea",
  "Maybe not today?",
  "Computer says no."
];
// Should I do my homework?
phrases[Math.floor(Math.random() * 5)];


// Random insult generator:

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
randomInsult;

// this modification allows for the length of array to change:
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
randomInsult;

// another modification, using an array and .join method:

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomInsult = ["Your " + randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");
randomInsult;

var array3 = [3, 2, 1];
var arrayToString = array3.join(" is bigger than ");
arrayToString;
