var dog = {
  name: "Pancake",
  legs: 4,
  isAwesome: true
};

dog.age = 6;

// you can save a function as a property inside an object. It will be called method. One way to add a method is with dot notation

console.log(dog);
// we add a property called bark to the dog object, and assign a function to it.
dog.bark = function() {
  // the function here uses this.name which retrieves the valie in the pbject's name property
  console.log("Woof woof! My name is " + this.name + "!");
};
dog.bark();

// You can use the this keyword inside a method to refer to the object on which the method is currently being called. When you call the bark method on the dog object, this refers to the dog object, so this.name refers to dog.name. The this keyword makes methods more versatile, allowing you to add the same method to multiple objects and have it access the properties of whatever object it is currently being called on.

// let's create a new function called speak that we can use as a method in multiple objects that represent different animals. When speak is called on an object, it will use the object's name (this.name) and the sound the animal makes(this.sound) to log a message:

var speak = function() {
  console.log(this.sound + "! My name is " + this.name + "!");
};

// let's create another object so we can add speak to it as a methid:
var cat = {
  sound: "Meow",
  name: "Mittens",
  speak: speak
}; // we set the speak property and assign it the speak function we created earlier Now cat.speak is a method that we can call by entering cat.speak(). Since we used the this keyword in the method when we call it on cat, it will access the cat object's properties:
cat.speak(); // Meow, ny name is Mittens

// more objects:
var pig = {
  sound: "Oink",
  name: "Charlie",
  speak: speak
};

var horse = {
  sound: "Neigh",
  name: "Marie",
  speak: speak
};

pig.speak(); // when you call pig, this will refer to pig
horse.speak(); // when you call horse, this will refer to horse
