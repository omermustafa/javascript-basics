//Part 2 - Variables
let letName = "Omer Mustafa";
var varName = "Omer Mustafa";

// window is a global variable, represented the window in which the script is running!
document.write("<h2>Part 2 - Variables in the medium freecodecamp</h2>");
document.write("Let variable in global variable window scope: " + window.letName + "<br>");
document.write("Var variable in global variable window scope: " + window.varName);


//Part 3 - Strings
document.write("<h2>Part 3 - Strings in the medium freecodecamp</h2>");
document.write("Open console using ctrl + shift + j");
let firstName = 'Omer';
let lastName = 'Mustafa';
console.log(firstName + lastName);
console.log(`My name is ${firstName} ${lastName}`);

//Some methods in use
//length function
console.log(`My name is ${firstName} ${lastName}`.length);
//split function - Displays the string in reverse.
//If you want to split where ever the specific character is found just insert the character within e.g split("s")
console.log(`My name is ${firstName} ${lastName}`.split(""));
//trim function - Trims the white spaces in the string
let trimStr = "A string with many               spaces in between for trim function.";
trimStr = trimStr.trim();
document.write("<br/>Displaying string after trimming" + trimStr);
//reverse function - Reverse the array of character or whatever
console.log(`My name is ${firstName} ${lastName}`.split("").reverse());
//join function - Join the array of strings of whatever
console.log(`My name is ${firstName} ${lastName}`.split("").reverse().join(""));
//indexOf function - method returns the index of the occurrence of the specific texts
var indexStr = "Please locate where the 'locate' occurs!, second 'locate' ";
document.write("<br/>indexOf function, indexing 'locate' in the string: " + indexStr.indexOf("locate"));
//search function - Searching for the string in a string
var searchStr = "Please locate where the 'locate' occurs!";
document.write("<br/>Searching through the function, using search function: " + searchStr.search("locate"));
//slice function - Extracts a part of the string.
var sliceStr = "Please locate where the 'locate' occurs!";
document.write("<br/>Slicing the string: " + sliceStr.slice(''));

//Example to the reverse the string
var str = `My name is ${firstName} ${lastName}`;
document.write("<br/>Reverse String example: " + str.split("").reverse().join(""));

//Part 4 - String Challenge
document.write("<h2>Part 4 - Strings Challenge in the medium freecodecamp</h2>");
// let firstName = "Omer";
// let lastName = "Mustafa";
// let fullName = firstName + lastName;
const fullName = `${firstName} ${lastName}`;
document.write(fullName);

//Part 5 - Numbers
document.write("<h2>Part 5 - Numbers in the medium freecodecamp</h2>");
let example1 = 7;
let example2 = 7.77;

console.log(typeof example1);
console.log(typeof example2);

//toFixed method - Converts the number into string, keeping a specific number of decimals.
var example3 = 7.7777;
document.write("toFixed method: " + example3.toFixed(2));

//Converting values using parseInt and parseFloat functions
var example4 = "3232";
document.write("<br/>Parse float function: " + parseFloat(example4));
console.log(typeof example4);

//Part 6 - Numbers Challenge
document.write("<h2>Part 6 - Numbers Challenge in the medium freecodecamp</h2>");
example1 = parseInt("33 World 22");
example2 = parseFloat('44 Dylan 33');
example3 = 55.3333.toFixed(0);
example4 = 200.0.toFixed(2);

console.log(`<br/>Output of example1: ${example1}`);
console.log(`<br/>Output of example2: ${example2}`);
console.log(`<br/>Output of example3: ${example3}`);
console.log(`<br/>Output of example4: ${example4}`);

//Part 7 - Booleans
document.write("<h2>Part 7 - Booleans in the medium freecodecamp</h2>");
example1 = true;
document.write("Displaying Boolean: " + example1);

//Part 8 - Booleans Challenge
document.write("<h2>Part 8 - Booleans Challenge in the medium freecodecamp</h2>");
example1 = false;
example2 = true;
example3 = null;
example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0; 

console.log(Boolean(example1));
console.log(Boolean(example2));
console.log(Boolean(example3));
console.log(Boolean(example4));
console.log(Boolean(example5));
console.log(Boolean(example6));
console.log(Boolean(example7));
console.log(Boolean(example8));

//Part 9 - Arrays
document.write("<h2>Part 9 - Arrays in the medium freecodecamp</h2>");
example1 = ['programming', 'design', 'art'];

example1.forEach(myFunction);
function myFunction(value){
    document.write(`${value}<br/>`);
    }

//Part 10 - Arrays Challenge
document.write("<h2>Part 10 - Arrays Challenge in the medium freecodecamp</h2>");
//Pass by reference
example1 = ['Dylan', 5, true];
example2 = example1;
example2.push(11);
console.log(example1);
console.log(example2);

//Pass by value
example1 = ['Dylan', 5, true];
example2 = [...example1];
example2.push(11);
console.log(example1);
console.log(example2);
//or there's another way, following map functionality
// example2 = example1.map((element) => {
//     return element;
// })

//Part 11 - Objects
document.write("<h2>Part 11 - Objects in the medium freecodecamp</h2>");
let objExample = {
    firstName: 'Omer',
    lastName: 'Mustafa',
    address: {
        city: 'Lahore',
        state: 'Punjab'
    },
    age: 22,
    cats: ['Meemo', 'Johnny']
};

objExample.age = 24;
document.write(Object.keys(objExample));
document.write("<br/>" + Object.values(objExample));
//checks if the property exists within the object
console.log(objExample.hasOwnProperty('firstName2'));

//Part 12 - Objects Challenge
document.write("<h2>Part 12 - Objects Challenge in the medium freecodecamp</h2>");

//Pass by reference
example1 = {
    firstName : 'Omer'
};
example2 = example1;
example2.lastName = 'Mustafa'

document.write(example1.lastName);
console.log(example1);
console.log(example2);

//Pass by value
example1 = {
    firstName : 'Omer'
};
example2 = Object.assign({}, example1);

example2.lastName = 'Mustafa';
console.log(example1);
console.log(example2);

//Part 13 - Arithmetic Operators
document.write("<h2>Part 13 - Arithmetic Operator in the medium freecodecamp</h2>");
document.write("Check Console.");

example1 = (5 + 5) - (4 * 4) / 4;
console.log(example1);
example2 = 12 % 5; // Remainders
console.log(example2); // Displays 2 remainder in this case.

//Part 14 - Relational Operators
document.write("<h2>Part 14 - Relational Operator in the medium freecodecamp</h2>");
document.write("Check Console.");

example1 = 10;
example2 = 15;
console.log(example1 <= example2);

//less strict comparison
example1 = 10;
example2 = '10';
console.log(example1 == example2); //would be true.

//Strictly equal comparison, checks for value and its type
example1 = 10;
example2 = '10';
console.log(typeof example1);
console.log(typeof example2);
console.log(example1 === example2); //would be false.

//Part 15 - Increment and Decrement
document.write("<h2>Part 15 - Increment & Decrement in the medium freecodecamp</h2>");
document.write(`Check console`);
example = 1;
example = example + 1;
console.log(example);

//Part 16 - Increment & Decrement Challenge.
document.write("<h2>Part 16 - Increment and Decrement Challenge in the medium freecodecamp</h2>");
document.write(`Check console`);

example1 = 5;
example1++;
console.log(example1); //Prints 6
console.log(example1++); //Prints 6

example2 = 5;
++example2;
console.log(example2); //Prints 6
console.log(++example2); //Prints 7

//Part 18 - If, Else and And, Or
document.write("<h2>Part 18 - If, Else and And, Or in the medium freecodecamp</h2>");
document.write(`Check console`);

example = 5;
if(example === 6 ){
    console.log('Runs');
} else if( true ) {
    console.log( 'else if' );
} else {
    console.log('else');
}

//Part 19 - If, Else and And, Or Challenge
document.write("<h2>Part 19 - If, Else and And, Or Challenge in the medium freecodecamp</h2>");
document.write(`Check console`);

console.log(10 === 10 && 5 < 4); //false
console.log(10 === 10 || 5 < 4 ); //true
console.log(5 >= 5 || 4 > 4);  //true


//Part 20 - Switch Statements
document.write("<h2>Part 20 - Switch statements in the medium freecodecamp</h2>");
document.write(`Check console`);

let studentAnswer = 'A';
switch(studentAnswer) {
    case 'A':
    console.log('A is wrong.');
    break;
    case 'B':
    console.log('B is wrong.');
    break;
    case 'C':
    console.log('C is correct');
    break;
    default:
    console.log('Not a real answer.');
}

//Part 21 - For loop
document.write("<h2>Part 21 - For Loop in the medium freecodecamp</h2>");
document.write(`Check console`);

let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for(let i = 0; i < numArray.length; i++){
    // console.log(numArray[i]);
    total +=  numArray[i];
}
console.log(total);

//Part 22 - While and do while Loop
document.write("<h2>Part 22 - While Loop in the medium freecodecamp</h2>");
document.write(`Check console`);

//while example
let count = 0;
while (true) {
    count++;
    if(count >= 20){
        break;
    }
}
console.log(count);

//do while example
count = 0;
do {
    count++;
    if(count >= 20){
        break;
    }
}
while(false)

console.log(count);

//Part 23 - Functions
document.write("<h2>Part 23 - Functions in the medium freecodecamp</h2>");
document.write(`Check console`);

function add(num1, num2){
    return num1 + num2;
}

console.log(add(10, 6));

















