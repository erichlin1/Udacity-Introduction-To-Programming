
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
console.log(Math.max(3,1,2,5,3,6,7,8));

