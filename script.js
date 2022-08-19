// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
    
      // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      // Look up these methods on Mozilla Developer Network web site if needed.
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();



// ************************** LECTURE VIDEO SUMMARY **********************************

//  Arrays ****************************************************

// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// };
// array[3] = { course: " HTML, CSS & JS"};

// console.log(array);
// array[2]("Yaakov");
// array[2](array[0]);
// console.log(array[3].course);


// Short hand array creation
// var names = ["Yaakov", "John", "Joe"];
// // console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// More on Array
// var myObj = {
//     name: "Yaakov",
//     course: "HTML/CSS/JS",
//     platform: "Coursera"
// }
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }

// More on Array
// var names2 = ["Yaakov", "John", "Joe"];
// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }


// Function Constructors, prototype, and the 'this' Keyword *******************************
// function test() {
//     console.log("Hello Coursera!");
// }
// test();

// function test () {
//     console.log(this) // "this" is pointing to the global window object
//     this.myName = "Yaakov";
// }
// test();
// console.log(window.myName);





// Passing Variables by Value vs by Reference **************************
// note that in javascript, primitives are passed by value while Objects are passed by reference

// Copy by Reference vs by Value

// by value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update: ");
// console.log("a: " + a);
// console.log("b: " + b);

// by Reference
// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);


// More 
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after: ");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value: ")
// console.log(value);


// More
// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before: ");
//     console.log(objValue);

//     objValue.x = 5;
//     console.log("after: ");
//     console.log(objValue);
// }

// value = { x: 7 };
// changeObject(value);
// console.log("after changeObject, orig value: ");
// console.log(value);



// Functions are First-Class Data Types ***********************
// They can be pass around as object  

// Function factory
// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// // Passing functions as arguments
// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);





// Functions are Objects *************************************

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// Object Creation Part 2 ( Using Object Literal ) *******************************
// Better way: Object Literal

// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook)
// console.log(facebook.ceo.firstName)


//  Object Creation Part 1 ( using new Object syntax )******************************

// var company = new Object()
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// // dot notation
// console.log(company)
// console.log("Company CEO name is: " + company.ceo.firstName);

// // bracket notation
// console.log(company["name"]); // quotation is used because the name is a string

// // bracket notation is preferable when there are more than one word as the property
// company["stock of company"] = 110;

// console.log("Stock price is: " + company["stock of company"]);
