// The string "boxer" has been assigned to the array element athletes[3]. Slice "x" out of the string and assign it to the variable seg, which hasn't been declared beforehand.
var seg = athletes[3].slice(2, 3);

var y = x.slice(9);
    // 10th to the end 

var seg = animal.slice(2, 6)
    // Remove the middle four

var a = name.slice(1);
    // Second to the last

// first character of a string rep by a variable to a second variable that has been declared before
var firstChar = name.slice(0, 1);

// How many characters there are in a string represented by a variable. In a second statement slice all but the first and last characters of the string and assign it to a second variable that hasn't been declared beforehand.
var charsInMonth = month.length;
var slicedMonth = month.slice(1, charsInMonth - 1);

// In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
var numChars = cityCount.length;
var segmentC = cityCount.slice(1, numChars - 3);

// Assign the number of characters in a string represented by a variable to another variable, which hasn't been declared beforehand. Then code the first line of a for statement that uses the variable as the loop limiter. Use the most common counter name, initial value, and increment.
var numChars = str.length;
for (var i = 0; i < numChars; i++) {

};

// 1- Assign "elephant" to a variable. 
// 2- Code an alert that displays the first 3 characters.
var str = "elephant";
alert(str.slice(0, 3));

// 1- Prompt for a long word.
// 2- Code an alert that displays the second through next-to-last characters.
var word = prompt("Enter a long word");
var wordLength = word.length;
alert(word.slice(1, wordLength -1));

// "captain" has been assigned to someWord. You want to slice "ap" out of it. Fill in the blank.
var segment = someWord.slice(1, 3);