// For loop to look for an replace "World War II" with "The Second World War"
for (var i = 0; i < Text.length; i++) {
    if (Text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}

// Looks for each charchter segment with 12 charcters to match World War II having that many. 

// indexOf method is the more efficient way to accomplish this task
var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

// ----  Questions -------

// What is the value of indx? - 3
var text = "To be or not to be.";
var indx = text.indexOf("be");

// Find the index of the first instance of a segment represented by seg in the string represented by text and assign it to the variable indx, which hasn't been declared beforehand.
var indx = text.indexOf(seg);

// Find the index of the first character of the first instance of a literal string segment in a string represented by a variable, and assign it to another variable, which hasn't been declared beforehand.
var segIndex = text.indexOf('x');

// Find the index of the first character of the last instance of a literal string segment in a string represented by a variable, and assign it to another variable, which hasn't been declared beforehand.
var segIndex = text.lastIndexOf("x");

// Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (indexNum !== -1) {

// Code an alert that displays the index number of the first character of a segment represented by a variable that occurs within a string represented by a second variable.
alert(paragraph.indexOf(segment));

// Code the first line of an if statement that tests whether a 3-character slice at the beginning of a string represented by one variable can be found somewhere within a string represented by a second variable.
if (var2.indexOf(var1.slice(0, 3)) !== -1) {

