const prompt = require('prompt-sync')();  // Correct import

const age = Number(prompt("Enter age: "));  // Convert input to a number

if (age < 18) { 
    console.log("Hi");
} else { 
    console.log("Hello");
}
