
  var name = "Nick";
  console.log("Hello " + name);
  if (name.length > 7) {
    console.log("That's a very long name");
  } else {
    console.log("Your name isn't very long");
  }


var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
  console.log("Great, I'm having lemon chicken");
}
else if (beefWithBlackBean) {
  console.log("I'm having the beef");
}
else if (sweetAndSourPork) {
  console.log("Ok, I'll have the pork");
}
else {
  console.log ("Well, I'll have rice then");
}


var name = "Jock";

if (name === "Pete"){
  console.log ("Hello me");
}
else if (name === "Louise"){
  console.log ("Hi mom");
}
else if (name === "Patrick"){
  console.log ("Hi pops");
}
else console.log ("Hello stranger");

// sheep counter:

var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log ("I have counted " + sheepCounted + " sheep!");
  sheepCounted++;
}
console.log ("zzzzzzz");

// while to for:
for (sheepCounted = 0; sheepCounted < 10; sheepCounted++){
  console.log ("I have counted " + sheepCounted + " sheep!");
}

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++){
  console.log("Hello!");
}

// listing all the animals in the array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}

// listing all the animals in a string
var name = "Nick";
for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

// print all the powers of 2 below 10 000:
for (var x = 2; x < 10000; x = x * 2){
  console.log(x);
}



// EXERCISES

// print all the powers of 3 below 10 000:
for (var x = 3; x < 10000; x = x * 3){
  console.log(x);
}

// as a while lop:
var newNumber = 3;
while (newNumber * 3 < 10000) {
  console.log(newNumber = newNumber * 3);
}


// awesome animals

var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++){
  console.log ("Awesome " + animals[i]);
}

// random string generator

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomString = "";
while (randomString.length < 6) {
  var randomPull = Math.floor(Math.random() * alphabet.length);
  var randomChar = alphabet[randomPull];
  console.log (randomString += randomChar);
}



// replace text with l33tsp34k
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {

  if (input[i] == "a"){
    output += "2";
  }
  else if (input[i] == "i"){
    output += "1";
  }
  else if (input[i] == "e"){
    output += "3";
}
else if (input[i] == "o"){
  output += "0";
}
else output += input[i];
}
console.log(output)
