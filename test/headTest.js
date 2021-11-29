const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code
assertEqual(head([5,6,7]), 5); //multiple elements that are numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //multiple elements that are strings
assertEqual(head([3]), 3); // One element, consisting of a number
assertEqual(head(["one"]), "one"); //One element, consisting of a string
assertEqual(head([]),); // Empty array
