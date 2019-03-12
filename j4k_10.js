/* function doHomeworkAlarm() {
  alert("Time to do homework");
};
var timeoutId = setTimeout(doHomeworkAlarm, 3000);

clearTimeout(timeoutId); */

var counter = 5;

var printMessage = function () {
  console.log("You have been staring at your console for " + counter + " seconds");
  counter +=5;
};
var intervalId = setInterval(printMessage, 5000);
