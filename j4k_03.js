// OBJECTS:

var cat = { // object literal
  "legs" : 3, // key-value pairs, : is used for assignment
  "name" : "Harmony", // key is always a string, value can be of any type
  "color": "Tortoiseshell" // commas between key-value pairs
};

// array literals ["a", "b", "c"], number literals 37, string literal "moose", boolean literal true or false, literal means that the whole value is written at once, not built up in multiple steps

// keys don't have to be in quotation marks, because JS knows it's always a string:

var cat = {
  legs: 3,
  name: "Harmony",
  color: "Tortoiseshell"
};

// but with quotation marks you can create keys with spaces, otherwise they have to follow rules of creating variables:

var cat = {
  legs: 3,
  "full name": "Harmony Philomena SNuggly-Pants Morgan",
  color: "Tortoiseshell"
// the value in the object can be a variable containing a value

// you can access values of objects with square brackets like in case with arrays, but they have to be in quotation marks:
cat["full name"];

// this can be reduced to dot notation, but only if the object key doesn't have any special characters like spaces, therefore we have to declare our object again:
var cat = {
  legs: 3,
  name: "Harmony",
  color: "Tortoiseshell"
};
cat.name; // "Harmony"


// to see all the keys in an object use Object.keys():

var dog = {
  name: "Pancake",
  age: 6,
  color: "white",
  bark: "Yip yap yip!"
};

var cat = { name: "Harmony", age: 8, color: "Tortoiseshell" };
Object.keys(dog);
Object.keys(cat);
Object.keys(cat);
// Object.keys(anyObject) returns an array containing all the keys of the object (but not their values, forthat use Object.values(anyObject))

// an empty object is like an empty array, but with curly brackets:

var object = {};

// you can add items to an object using strings instead of numbers:

var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
cat;

// JS doesn't store objects with their keys in any particular order

// creating objects by adding values using dot notation:
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";
cat;

// if you ask for a property that's not part of the object, JS returns undefined:

var dog = {
  name: "Pancake",
  legs: 4,
  isAwesome: true
};
dog.isBrown; // undefined


// here's an array of objects:
var dinosaurs = [
  { name: "Tyronnosaurus Rex", period: "Late Cretaceous" },
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Triassic" }
];

// to get info on the first dinosaur, call it by its array index:
dinosaurs[0]; // {name: "Tyronnosaurus Rex", period: "Late Cretaceous"}

// if you want to get only the name of the first dinosaur, just add the object key in square brackets after the array index:
dinosaurs[0]["name"]; // "Tyronnosaurus Rex"

// or use dot notation:

dinosaurs[1].period; // "Late Jurassic"

// an array of objects, where each object also contains an array:

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

// array of friends:

var friends = [anna, dave, kate];

// now you can retried either object using index of the friends array:
friends[1]; // {name: "Dave", age: 5, luckyNumbers: Array(3)}

// we can also retrieve a value within an object by entering the index of the object in square brackets followed by the key we want:

friends[2].name; // "Kate"

// we can even retrieve value from inside the array inside one of the objects:
friends[0].luckyNumbers[1]; // 4
friends[0].luckyNumbers; // [2, 4, 8, 16]


// examples of using objects:

var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Jimmy"];
owedMoney["Junen"];

// Jimmy borrows more:

owedMoney["Jimmy"] += 3;
owedMoney["Jimmy"]; // 8

owedMoney; // {Jimmy: 8, Anna: 7}


// Movie library object:

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Hewey D", "Dewey L", "Lewey H"],
    format: "DVD"
  },
  "Star Wars": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blue-ray"
  }
};

// now it's easy to find info about a movie:

var findingNemo = movies["Finding Nemo"]; // we save movie info about Finding Nemo into a variable findingNemo, we can then look at the properties of this object
findingNemo.duration; // 100
findingNemo.format; // "DVD"

 // we can add new movies too:

 var cars = {
   releaseDate:2006,
   duration: 117,
   actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
   format: "Blu-ray"
 };
 movies["Cars"] = cars; // since it's a single word movies.Cars = cars wouldn've worked too, but it won't work with other movies. Here we call our object movies, create a property "Cars" and assign it value cars, which is the object above

 movies; // it now has Cars at the end

 Object.keys(movies); // probably a neater way to call the object

 // you use strings to access elements in an object vs. using numbers to access elements in an array => arrays are ordered, and objects are not

 // EXERCISES

 scores = { "Peter": {score: 0}, "Jenna": {score:0}, "Norm": {score:0}, "Alice": {score:0}};
 scores.Peter.score +=3;
 scores.Jenna.score +=5;
 scores.Norm.score +=1;
 scores.Alice.score -=4;
scores;

var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, {
    purpose: "confusion",
    number: 123
  },
  3.3],
  "random animal": "Banana Shark"
};
myCrazyObject["some array"][2]["number"]; // 123
