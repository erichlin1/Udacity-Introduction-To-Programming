
// ** Variable BINDING **

/* Binding a value uses the keyword (var, let, const) where var was used pre-2015 JS
 and let is scope defined. const implies that a value is bound indefinitely.

 constant binding => const declaration

 - The environment implies there exist a set of bindings and their values. 
 - executing a function is called invoking.
 - command + option + I (inspection or Javascript console);
 - side effects vs return value


*/


// ** Null, Undefined, NaN **

/* NaN = Not a number, 'Undefined' is returned when a variable is not declared.
Null is simliar to 'Undefined' Treat both Null and 'Undefined' the same. 
*/


// Escaping Character - ES6 string literal - backtick basics
// template literal - string literals that allow for embedded expressions (template substitute)



// ---- Exercise ---- //

/* 
const age = 28;

let escapingCharacter = `Eric is ${age}.` // variable called Template Literal
console.log(escapingCharacter)
// every character in a string literal has correpsonding ASCII value.
let myString = `blue`;
let index = 0;
let characterCount = 0;
for (index; index < myString.length; index++)
{
    console.log(myString.charCodeAt(index));
};
*/



// ** Implicit type coercion **

/* As the name states, A integer declared as a string data type will be converted into 
a integer data type. Coercion => forced conversion. 

- Javascript is a loosely typed language. Does not require data types to be classified.
- C is not a loosely typed language. 

*/

/* Strongly typed language vs Loosely typed language.
STL generates more errors due to its restriction of data type conversion. 
the data type in question has to represents the expects data type.

Where as...

LTL generates less error, but leads to more error. 
*/


// ---- Exercise ---- //

/*

console.log(String('Hello'));
console.log(Number("Hello")); // => "Hello" cannot be converted into a legal Number. compare this to the following..
console.log(Number("10")); // => 10.

console.log("5" - 1);
console.log("5" + 1);

*/



// ** Object instantiation **


// ---- Exercise ---- //

// instantiating an object requires property, and value declartion;

/*

const object1 = {
    name:'Eric',
    age: 28,
    ethnicity: 'Chinese'
};


console.log(Object.getOwnPropertyNames(object1));

*/



/* *** Type Conversion ***
 
strict equality => when comparing data types.






*/ 

/* --- Exercise ----
console.log("1" == 1);      
console.log(0 === false);
console.log(1 !== false);
console.log(1 != false);
console.log(true >= 0); // I suspect that this is true. 
console.log(Number(true));
console.log(true >= 0);
console.log(1 !== false);
console.log(3 === 3);
console.log(null == undefined);
console.log(Number(null));
console.log(null)
*/

// Comparing a undefined or null datat type are equal.

// var empty;
//console.log(null == empty);
// Javascript evalutes the operand first, then the operators. JS recognizes 'concatenation'
//console.log("5" + 1);

//--- Short Circuiting logical operators

function myName(name)
{
    console.log(name);
};
// if the value to the left is true after conversion, then the value on the left is returned.
// if it returns false, then the value to the right is returned.

/*
        // will return false
        console.log(false && myName('Alyssa'));

        // will return 'Alyssa'
        console.log(true && myName('Alyssa'));

        // will return true
        console.log(true || myName('Alyssa'));

        // will return 'Alyssa'
        console.log(false || myName('Alyssa'));
*/

// console.log produces a value, therefore, it is an expressions.

/* 

function numberType(number)
{
    // Unless number (int) is 'not a number'
    if (!Number.isNaN(number) && number >= 0)
    {
        if (number % 2 === 0)
        {
            console.log('even');

        } else {
            console.log('odd');
        };
    } else {
        console.log('Error: The value that you have chosen is not valid');
    };
};

numberType(10);
numberType(0);
numberType(1);
numberType(3);
numberType(4);
numberType(-5);
*/

// exercise that determines musiscal group based on input integer.
function musicians(musicalGroups)
{
    if (musicalGroups <= 0)
    {
        console.log('not a group');
    } else if (musicalGroups === 1) {
        console.log('solo');
    } else if (musicalGroups === 2) {
       console.log('duet');
    } else if (musicalGroups === 3) {
        console.log('trio');
   } else if (musicalGroups === 4) {
       console.log('quartet');
   } else if (musicalGroups > 4) {
       console.log('musicians');
   };
};

// while loop - given a number, determine the odd integers, and log them in the console.
function oddNumbers(number)
{
    let index = 0;
    // while will continue execution if condition is true.
    while (number !== 0 && number % 3 === 0)
    {
        console.log(number);
        number = number - 3;
    };

};   


// NOTE: 3 logical operators (! , || , &&)

// DO Loop - executes atleast once

function doLoop(number)
{
    do
    {
        console.log(number);
    } while (number % 3 !== 0)
};

// All string will convert to true except for an empty string.


// Murder Myster (3-4)


function MurderMystery(room, suspect)
{
    var weapon = '';
    var solved = false;
    if (room === 'billiards room')
    {
        weapon = 'pool stick';
        var realSuspect = 'Mrs. Sparr';
    } else if (room === 'ballroom') {
        weapon = 'poison';
        var realSuspect = 'Mrs. Kalehoff';
    } else if (room === 'gallery') {
        weapon = 'trophy';
        var realSuspect = 'Mrs. Van Cleve'
    } else {
        weapon = 'knife';
        var realSuspect = 'Mr. Parkes';
    }

    if (suspect === realSuspect)
    {
        solved = true;
    }
    if (solved)
    {
        console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
    }
}


// Not Correct


function atm(balance, checkBalance, isActive)
{
    if (checkBalance == true)
    {
        if (isActive == true && balance > 0)
        {
            balance = balance.toFixed(2);
            console.log(`Your balance is $${balance}.`);
        } else {
            if (isActive !== true)
            {
                console.log('Your account is no longer active.');
            } else {
                if (balance = 0)
                {
                    console.log('Your account is empty');
                } else {
                    console.log('Your balance is negative. Please contact bank.');
                }
            }
        }
    } else {
        console.log('Thank you. Have a nice day!');
    }

};




