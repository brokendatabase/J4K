let secondsInMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInMinute * minutesInAnHour;
console.log (secondsInAnHour);
let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log (secondsInADay);
let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log (secondsInAYear);
let age = 38;
console.log (age * secondsInAYear);

let highFives = 0;
++ highFives; // here you get the value once the increment occurred
++ highFives;
-- highFIves;

highFives++; // here the value returned is the one before the increment
highFives++;
highFIves--;

var score = 10;
score +=7; // remember the += and -= properties
score -=3;

// also multiplication and division:
var balloons = 100;
balloons *= 2;

var balloons = 100;
balloons /= 4;

// string and number behaviour:

let numberNine = 9;
let stringNine = "9";

numberNine + numberNine;
stringNine + stringNine;

let greeting = "Hello ";
let myName = "Nick";
greeting + myName;

// you can add .length to the string itself
"Abragastochikonavedenie".length;


// to get a specific character from the string use square brackets:
var myName2 = "Nick";
myName2[0]; // N
myName2[1]; // i

// combining characters from different strings:
var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[0];

// slicing strings:

var longString = "My long string is long";
longString.slice(3, 14); // numbers indicate first character and the character after the last character in the slice == pull a slice out if this longer string starting at the character at place 3 and keep going until you hit place 14.

// if you inclide only one number in the parentheses after slice, the string slice will go all the way to the end of the string

var longString2 = "My long string is long";
longString2.slice(3); // "long string is long"

// and if you add second number as a negative it will omit the number of the last characters:

var longString2 = "My long string is long";
longString2.slice(3, -5); // "long string is"

//UPPERCASE and lowercase

"Hello there".toUpperCase();
"I'M FINE thank YOU!!!".toLowerCase();

var sillyString = "hELlo THERE, hOW ARE yOu doING?"; // create new variable to modify later
var lowerString = sillyString.toLowerCase(); // we make the entire string lowercase
var firstCharacter = lowerString[0]; // create a new variable for the first character for lowerString
var firstCharacterUpper = firstCharacter.toUpperCase(); // turn that character to Uppercase
var restOfString = lowerString.slice(1); // we take the entire string except the first character
firstCharacterUpper + restOfString; // we combine the first character with the rest of the string

// my slightly shorter version of the same process:
var sillyString2 = "hELlo THERE, hOW ARE yOu doING?";
var lowerString2 = sillyString2.toLowerCase();
var firstUpper = lowerString2[0].toUpperCase();
var result = firstUpper + lowerString2.slice(1);
console.log(result);

// but he gets it even shorter:
var sillyString = "hELlo THERE, hOW ARE yOu doING?"; // create new variable to modify later
var result = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
console.log(result);

// OPERATORS

var hadShower = true;
var hasBackpack = false;
hadShower && hasBackpack; // false

var hasApple = true;
var hasOrange = false;
hasApple || hasOrange; // true

var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday; // false, because we don't shower on weekends
!needToShowerToday; // true, because it's the opposite of the value abovex

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool; // true, it's not weekend and you had shower (and you have either apple or orange)

// JS calculates && before || statements, so || will have to be in parentheses


// Greater than:

var height = 65;
var heightRestriction = 60;
height > heightRestriction; // true

var height = 60;
var heightRestriction = 60;
height > heightRestriction; // false, unless you use >= for the condition:

var height = 60;
var heightRestriction = 60;
height >= heightRestriction; // true


// less than:

var height = 65;
var heightRestriction = 48;
height < heightRestriction; // false

var height = 48;
var heightRestriction = 48;
height <= heightRestriction;


// EQUAL TO:

var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess; // false

var harpoGuess = 5;
mySecretNumber === harpoGuess; // true

var grouchoGuess = 7;
mySecretNumber === grouchoGuess; // false


 // why double equals are confusing:
 0 == false; // true, because JS converts Booleans to numbers, and false is 0
"5" == 5; // true because JS converts string to number
 "false" == false // false, because

// MOVIE THEATER ADMITTANCE test:
 var age = 12;
 var accompanied = true;
 var child1 = 15;
 var child2 = 11;
child1 > age || !accompanied;

child2 < age || accompanied;
