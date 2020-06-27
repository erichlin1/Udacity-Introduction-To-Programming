var assert = require('assert');
const { type } = require('os');
const { TestResult } = require('@jest/types');
const { is } = require('@babel/types');
// const { NONAME } = require('dns');
// const { CLIENT_RENEG_LIMIT } = require('tls');

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

// Ice Cream Topping

function iceCream(flavor, vessel, toppings)
{
    if (flavor === 'vanilla' || flavor === 'chocolate')
    {
        if (vessel === 'cone' || vessel === 'bowl')
        {
            if (toppings === 'sprinkles' || toppings === 'peanuts')
            {
                console.log(`I\'d like to two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
            }
        }
    }
}



function iceCream2(flavor, vessel, toppings)
{
    if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts'))
    {
        console.log(`I\'d like to two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)

    }
    
    
}


// What do I wear?


function shirtSizing(shirtWidth, shirtLength, shirtSleeve)
{
    if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve <8.38))
    {
        let size = 'S';
        console.log(size);
    } else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))
    {
        let size = 'M';
        console.log(size);
    } else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))
    {
        let size = 'L';
        console.log(size);
    } else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))
    {
        let size = 'XL';
        console.log(size);

    } else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))
    {
        let size = '2XL';
        console.log(size);
    } else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13))
    {
        let size = '3XL';
        console.log(size);
    } else {
        console.log('NA');
    }


}





// ternery operator

function value(number)
{
    let number2 = 10;
    number === number2 ? ans() : ans2();
};


function ans()
{
    console.log('yes');
};

function ans2()
{
    console.log('no');
}


// ** Navigating the Food Chain ** 
// if-else statements


function foodChains(eatsPlants, eatsAnimals)
{
    var category = eatsAnimals ? (eatsPlants ? 'omnivores' : 'carnovires') : (eatsPlants ? 'herbivores' : undefined);
    console.log(category);
}

// switch statements

function switchTest(mood)
{
        switch (mood)
    {
        case 'irritated':
            console.log('I hope you feel less stress');
            break;
        case 'happy':
            console.log('Great!');
            break;
        case 'not happy':
            console.log('I am so sorry..');
            break;
        default:
            console.log('what\'s your mood?');
    }

}




// Looping A Triangle


function loop(amount)
{
    let hashString = '', emptyString = ' ';
    for (var index = 0; index < amount ; index++)
    {
        hashString = hashString + emptyString; 
        
        console.log(`${hashString}#`);
        
    }
};

// back to school

function backToSchool(education)
{
    var salary;
    switch (education)
    {
        case 'no high school diploma':
            salary = 25636;
            break;
        case 'a high school diploma':
            salary = 35256;
            break;
        case 'an Associate\'s degree':
            salary = 41496;
            break;
        case 'a Bachelor\'s degree':
            salary = 59124;
            break;
        case 'a Master\'s degree':
            salary = 69732;
            break;
        case 'a Professional degree':
            salary = 89960;
            break;
        case 'a Doctoral degree':
            salary = 84396;
            break;
    };
    salary = salary.toLocaleString('en-US');
    console.log(`In 2015, a person with ${education} earned an average of $${salary}/year.`);
}



// JuliaJames

function juliaJames(number)
{
    var index = 0;
    var james;
    while (index < number)
    {
        if (index % 3 === index % 5)
        {
            console.log(index + ',' + 'JuliaJames');
        } else if (index % 3 === 0)
        {
            console.log(index + ',' + 'Julia');
        } else if (index % 5 === 0)
        {
            console.log(index + ',' + 'James');
        } else
        {
            console.log(index);
        }
        index += 1;

    }
}

// juliaJames Quiz written in using ternary operator.
// Always try to reduce code for efficency and clarity. 

function juliaJames2(number)
{
    var index = 0;
    while (index < number)
    {
        let divThree = index % 3 === 0, divFive = index % 5 === 0;
        let james = divFive ? (divThree ? 'JuliaJames' : 'James') : (divThree ? 'Julia' : index);
        console.log(james);
        index += 1;
        
    }
}

// Chessboard

function chessBoard(n)
{
    return;
}



// even values - print white space
    // odd values - n/a
    // n / 2 => 4 white spaces & white hashtags
    // starts with hashtag regardless
    
function BottlesOfJuice(num)
{
    return;
}

// CHapter 3.
// square
const square = function(x)
{
    return x * x;
}

// addition
const addition = function(x)
{
    return x + x;
}

// square exponentiation
const compound = function(x)
{
    return x ** 2;
}


function bottlesOfJuice(n)
{
    var index;
    for (index = 99 ; index != (n-1) ; index--)
    {
        let firstPartLyrics = 'bottles of juice on the wall!'
        let secondPartLyrics = 'bottles of juice! Take one down, pass it around...' 
        console.log(`${index} ${firstPartLyrics}`)
    }
}


function bottlesOfJuice2(num)
{
    var index;
    let firstPartLyrics, secondPartLyrics;
    while (index != num)
    {
        
        let classifer = (num == 1 || num == 0) ? 'bottle' : 'bottles';

        firstPartLyrics = `${classifer} of juice on the wall!`;
        secondPartLyrics = `${classifer} of juice! Take one down, pass it around...`;
        console.log(`${num} ${firstPartLyrics} ${num} ${firstPartLyrics} ${num} ${secondPartLyrics}`)

        num -= 1;
    }
}


function countdown()
{
    let index = 0;
    while (startTime >= 0)
    {
        switch (startTime)
        {
            case 50:
                console.log('Orbiter transfers from ground to internal power');
                break;
            case 31:
                console.log('Ground launch sequencer is go for auto sequence start');
                break;
            case 16:
                console.log('Activate launch pad sound suppression system');
                break;
            case 10:
                console.log('Activate main engine hydrogen burnoff system');
                break;
            case 6:
                console.log('Main engine start');
                break;
            case 0:
                console.log('Solid rocket booster ignition and liftoff!');
                break;
            default:
                console.log(`T-${startTime} seconds`);
        }
        startTime -= 1;
    }
    
}


// nested For Loops

// Function & scope

const scope = function(x)
{
    var index;
    for (index = 1 ; index < x ; index++)
    {
        let secondIndex = 01010101;
        console.log(10);
    }
    // console.log(secondIndex); // Error.
    
};


// function parameters are bindings that are defined by the caller.
// parameter functional bindings (PFB) is only defined within it's block scope, even though
// there exist a global variable with the same name.
// Multiple Degrees of locality

// Lexical scoping 


const animals = function(age)
{
    const dog = function(breed, owner)
    {
        console.log(`dog: ${age} years, ${breed}, ${owner}`);
    }
    const elephant = function(breed, owner)
    {
        console.log(`elephant: ${age} years, ${breed}, ${owner}`);

    }

    dog('German Shepard', 'Eric');
    elephant('Bush Elephant', 'Alyssa');
    
}
// animals(10);



// imperative to initialize functions before calling. 
// inner function inherits all bindings of the outer function.

// function declaration refers to regular method of defining a function, as below:
// phone() is accessible before the code that calls it.

// function declaration does not follow the top-to-bottom control flow. 
function phone(type)
{
    return type;
}



// funtion as a value
const secondPhone = function(type)
{
    return type;
};



// Nested Loops

// Quiz: Changing the Loop (4-4)

for (var x = 9 ; x >= 1 ; x--)
{
}

// Quiz: Fix the Error 1

for (x = 5 ; x < 10; x++)
{
}

// Quiz: Factorial

function factorial(n)
{

    let factor = 1;
    for (let index = 1 ; index <= n ; index++)
    {
        factor  = factor * index;
    }
    return factor;
}


// var keyword cannot have block scope => variable can be accessed anywhere

function findMySeat(rows, seats)
{
    var rowIndex, seatIndex;
    for (rowIndex = 0 ; rowIndex < rows ; rowIndex++)
    {
        for (seatIndex = 0 ; seatIndex <= seats ; seatIndex++)
        {
            console.log(`${rowIndex}-${seatIndex}`);
        }
    }
}


// reverse string

const reverseString = function(string)
{
    let index;
    let solution = '';
    // need to know the length of the string
    // recall that first position of a string or array starts at zero.
    // Thus, (-1) => starts at 0.
    for (index = string.length - 1 ; index >= 0 ; index--)
    {
        solution = solution + string[index];
    }
    console.log(`Reversed String: ${solution}`);
}


// Example.
// Parameters are defined in the function declaration.
// You are invoking a funtion by supplying arguement(s). 

function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
  }
  
  var avg = findAverage(5, 9);

  // Quiz: laugh it Off 1

function laugh1()
  {
      return 'hahahahahahahahahaha!';
  }


  // Quiz Laugh it Off 2

function laugh(num)
{
    var index;
    var ha = '';
    for (index = 0 ; index < num ; index++)
    {
        ha += 'ha';
          
    }
    return `${ha}!`
}


// Arrow Function

const myPhone = (type, age) => {console.log(`${type}, ${age}`)};
const myFamily = (brother, sister) => {console.log(`${brother}, ${sister}`)};
// if defining a function using the arrow keyword & contains only one parameter then parenthesis and breackets can be ommited. 
const myClass = subject => console.log(`I have ${subject} class today`);
const isCar = () => {console.log('I drive a lexus.')};


// two or more - must include parenthesis and brackets
// one parameter - optional parenthesis and brackets
// zero parameters - same as (two or more)


// optional arguements

var isNumber = 'parameter is a number';
var isNotNumber = 'parameter is not a number';
var num = 'number'
const isComputer = x => type(x) === num ? console.log(isNumber) : console.log(isNotNumber);

// minus

function minus(a, b) {
    if (b === 5) 
        console.log(b); // notice brackets are not included.
}

// Global Scope
// function defined in global, is accessible everywhere. 

// compare to book1
const books = (subject) => 
{
    console.log(addition);
    const math = (area) => 
    {
        var addition = '+'
        console.log(addition);

    }
}

const books1 = (subject) => 
{
    if (subject === 'math') 
    {
        let section = 'quadratic'; // if if statement is a single-statent, there cannot exist a lexical declaration
        console.log(section);
    }
    
}

// Example of Shadowing (Variable Scope)
// identifiers that are declared globally using var keyword is acessible in all scopes
// If the identifer is changed, it will update all the cases globally.
// ex:

var x = 1;
const timesTwo = () => {
    var x = 1;
    x = x * 2;
    return x;
}


//  Example of Block Scope. test let keyword to see the behavior.

const house = (size) => {
    
    if (size = '400 sq') {
        var size2 = '500 sq';
    }
    console.log(size2)
}


// Example of Hoisting | NOTE: Hoisting does not imply instantiation, but declaration. 

const sayGreeting = () => {
    let name = 'Eric';
    console.log(greeting + " " + name)
    var greeting;
}


// Variable assignments are not hoisted.


// Build a Triangle
// if it is a single-line conditional and does not include lexical declaration
// ... then brackets can be ommitted.

// write a function that returns a astricks with a newline.

const buildTriangle2 = (length) => { 
    let row, column;
    var triangle = ''; frame = '';
    for (row = 1; row <= length; row++)
    {
        for (column = 1; column <= length; column++)
        {
            if (row === column) 
            {
                // declaring a function using the arrow function. return statement is implicit.
                const myFunc = triangle => triangle + '\n';
                triangle += '*';
                frame += myFunc(triangle)
            }
        }
    }
    return frame;
}



// lesson learned:

// 1. concatenating a newline to a string is not the same as returning a newline and subsequently, concentating a newline. 











// pseudocode.

/* NOTE: makeline accepts input length that prints on # of character and starts a newline.
*/


const makeLine = (index) => {
    var astricks = '';
    for (var line = 0; line < index; line++)
    {
        astricks += '*';
    }
    astricks = astricks + '\n';
    
    return astricks;
}

function buildTriangle(length) {
    for (var index = 1; index < length; index++)
    {
        return makeLine(index);
    }
}








// Question: Does nested for loops, start a new line?

const nestedLoops = () => {
    for (var i = 1; i < 2; i++)
    {
        for (var j = 1; j < 2; j++)
        {
            console.log('$');
        }
        console.log('#');
    }
}

// Ans: It does.


// Keyword (var, let, const) 

// NOTE: var keyword does not follow block scope compared to const and let.
// NOTE: when var is declared globally, it is accessible everywhere unless its redeclared inside a function
// . . . this case, its follows functional scope. 
// NOTE: Var can be redeclared, updated.
// NOTE: let cannot be redeclared, but can be updated.
// NOTE: const cannot be redeclared or updated.
// NOTE: Global scope, functional scope, and block scope.



// Closure:
// local bindings are created anew for every call. different calls can't trample on one another's local bindings.


// A function that references bindings from local scopes around it is called a closure. 
// a local binding is declared or instantiated everytime there is a function call.
// closure => reference. 

// reference of n => closure.
const newPhone = (ageOfPhone) => {
    let n = ageOfPhone;

    return () => n;
}
let phoneAge = newPhone(10);

// reference of factor => closure. 
// In this case, twice is a closure since it references factor (a local binding) that is a parameter of multiplier.
const multiplier = (factor) => {
    return number => number * factor;
}
let twice = multiplier(2);


// function multiplier returns a function that accepts (1) parameter. that produces a value (number * factor)

// A good mental model is to think of function values as containing both the 
// ... code in their body and the environment in which they are created.



// Function Expression:
// storing a function in an identifier

(function() {
    let type = 10;
})();


// anonymous function (a function with no name)

// NOTE: all function declaration is hoisted to the top of the script before the scrip is executed.
// function expressions are not hoisted because they involve variable assignment.
// 


// NOTE: function expressions - functions that are stored in a variable/
// Quiz: Laugh.

const laughTwo = function(num) {
    var laugh = '';
    for (var index = 0; index < num; index++)
    {
        laugh += 'ha';
    }
    return laugh;        
};

// Quiz: Cry.

var cry = function emotion() {
    return 'boohoo!';
}
cry();

// Quiz: inline.




function emotions(myString, myFunc) {
     console.log('I am ' + myString + '', '' + myFunc(2))
}

/* 
var myString = 'happy';
const myFunc = function(num) {
    var ha = '';
    for (var index = 0; index < num; index++)
    {
        ha += 'ha';
    }
    return `${ha}!`;        
};

emotions(myString, myFunc);
// */


function addition2 (x, yFunc) {
    console.log(`${x}, ${yFunc()}`);
}


/* 
* Fundamental: in order to invoke a function, argument(s) must be provided.
* This arguments can be any type, including a functions.
* NOTE: a function can be invoked while declaring a function. in this case..
* a anonymous function.
*/


// invokation and function declaration



/*
* Cannot invoke a function with multiple inline function expressions as arguements.
* There can only contain 1 inline function expression if it is the leading arguement. 
* Function Declarations are always hoisted to the top of the script.
* This is a different cases for function expression, and arrow functions.
* Function expressions and arrow function do not create local bindings unlike regular functions.
*/ 

// Quiz: Arrays.


function udaciFamily() {
    var udaciFamily = ['julia','James','Eric'];
        console.log(udaciFamily);
}

// Quiz: The Price is Right

var prices = [7.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];


prices[0] = 0.123;
prices[2] = 2.123;
prices[6] = 1.123;

// Push (appends element to last of array) push - Method

prices.push(999);

// pop (removes last element of the array) pop - Method

prices.pop();

/*
* splice() Method
* Example:
* if deleteCount > 0 then the index (starting from 0) presceding from start index will be removed)
* if deleteCount === 0 then elements will be inserted behind the refactored 0th index relative to start index.
*
*/

/*
const months = ['Jan', 'March', 'Apr', 'May', 'June', 'July', 'Sep'];
months.splice(0, months.length, 0);
console.log(months);
//*/





// Quiz: Quidditch Cup/
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const hasEnoughPlayers = (team) => {
    if (team.length >= 7) {
        return true;
    } else {
        return false
    };
    

};



//*
function hasEnoughPlayers2(team) {
    if (team.length >= 7) {
        return true;
    } else {
        return false;
    }
};
//*/


// Joining the Crew. using push to add three more elements.

function joiningTheCrew() {
    let captain = "Mal";
    let second = "Zoe";
    let pilot = "Wash";
    let companion = "Inara";
    let mercenary = "Jayne";
    let mechanic = "Kaylee";
    let doctor = "Simon";
    let sister = "River";
    let shepherd = "Book";

    let crew = [captain, second, pilot, companion, mercenary, mechanic];
    crew.push(doctor, sister, shepherd);
    console.log(crew);
};

// reversing a string.
let array = ['1', '2', '3'];
const reverseString2 = array => array.reverse();

const reversedString3 = array.reverse();

// reversing a string explicity.

function reverseArray (array) {
    const arrayLen = array.length;
    const i = arrayLen - 1;
    let newArray = [];
    for (let j = 0 ; j < arrayLen; j++) {
        newArray.push(array[i - j]);
    }
    return newArray;
};


/*  pseudo code
*   known: length of array, indices
*   obj: return reversed array
*   In order to take the last index of newArray, subtract last index of newArray 
* 
*
*   Test-Cases:
*   

*/

/*  Array Loops */ 

function arrayLoops(/* input array */ array) {
    // donuts.length is out of bounds.
    const arrayLen = array.length - 1;
    for (let i = 0; i <= arrayLen; i++) {
        array[i] = array[i] + ' hole';
    }
    return array;
}

/*  for each method */ 



// parameter of .forEach is a function that performs some operation on the paramter array.
// return value forEach() is always undefined.

var numbers = [1,2,3,4,5,6,7,8];
var newNumbers = [];
function numberAddition(/* corresponds to each element in array */ number) {
    number = number * 10;   

    newNumbers.push(number);

}

/*  ***** .forEach() *****
*
*
*

*   performs operations defined by parameter function for each element in the array.
*   NOTE: when referring to 'callback' function => function that calls a function within parameter.
*   NOTE: Typical use case for .forEach() are Side Effects at the end of the chain.
*
*/

/*  modifying an array during iteration
*   NOTE: forEach does not make a copy of the array before iteration.
*       ... Before callback invokation, forEach assignme
*   forEach method does not wait for promises
*   NOTE: deleting an array in position during iteration will cause a behavior similiar continue.
*/


let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
  if (word === 'two') {
    words.shift()
  }
})
// one
// two
// four

/* Quiz: Another Type of Loop
* 
*
*
*
*/


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

/* forEach Method using inline functional expression declaration */
test.forEach((score, index, array) => {
    if (score % 3 === 0) {
        array[index] = score + 100;
    };
});

/* forEach Method using fuction declaration and explicity invoking callback function using forEach Method on array. */
function testScores(score, index, array) {
    if (score % 3 === 0) {
        array[index] = score + 100;
    };
    console.log(score);
}


/* 
*.map method execution 
* compared to forEach method, map method returns an array.
*/
var numbers = [1, 2, 3, 5, 6];
function multipleByTwo(number, index, array) {
    // each line is executed to the extend of the length of the array.
    number = number * 2; 
    console.log(number);
    return number;
}
// inline function expressions using ES6 for map function

const isMultipliedByTw0 = numbers.map((number) => {
    number *= 2;
    return number;
});


/* QUiz: I Got Bills
*
*/

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

/* 
* declared inline function expression stored in identifier totals 
*
*
*/
const totals = bills.map((bill) => {
    return Number((bill + (bill * 0.15)).toFixed(2));
});


/*  nested numbers
*      
*
*/
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

function nestedNumbers(numbers) {
    let newNumbers = [];
    const numbersLen = numbers.length;
    for (let i = 0; i < numbersLen; i++) {
        let tempList = [];
        for (j = 0; j < numbers[i].length; j++) {
            numbers[i][j] % 2 === 0 ? tempList.push('even') : tempList.push('odd');
        };
        newNumbers.push(tempList);
    };
}

/* 
* method is just a function that is associated with an object. 
*
*/

/*  Data Structures: Objects and Arrays.
*
*
**  Properties ** 
*
* Strings are itself an array.
* Non-values (null & undefined) do not have properties
* Indices in a array an an numerical representation of the property name for the array.
* To access the element in an array, you mind access the property of the array.
* property names are strings
* a property can be accessed to calling its valid property name isng the bracket notation.
* OR accessing using DOT Notation. 
* value.x - fetches the property name with the literial x name.
* value[x] - tries to evaluate the expression x. x is converted to a property name first since properties are string data type.
*
*
*/

/* Accessing a property of an object */

let  newArray  = ['MonDay', 'TueSday', 'WednesDay', 'ThurSday'];

/* 
** Methods **
*
* properties can hold function values, called Methods.
* strings are inheritantly an array. all arrays contains properties that methods. so, methods such as...
* ... toUpperCase can used on strings.
* A stack is a data structure that allows you to push data on the stack, and pop data out of the stack in the opposite order.
*
*/

// console.log(newArray[0].toUpperCase());
// console.log(newArray[0].toLowerCase());
// console.log(newArray['length']);

/*
* Objects **
*  
* Key Value Pairs => key: value (key: string data type)
* objects are collections of properties
* 
*/

let day1 = {
    squirrel: false,
    events: ['work','touched tree', 'pizza'],
    foodOfChoice: 'Walnuts',
    eat: function () {
        if (squirrel === true) {
            return `my food of choice is ${foodOfChoice}`;
        } else {

        }
    }
    
};

/**
 * object is a data structure. You can track a data by using key, and store a value.
 * 
 */
let person = {
    name: 'eric',
    age: 28,
    interest: ['basketball', 'cooking', 'alyssa'],
    work: 'Software Engineer at Google'
}

let breakfast = {
    name: 'The Lumberjack',
    price: 9.95,
    ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
}

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },
    printSummary: function printAccountSummary() {
        const printBalance = `Your balance is currently $${savingsAccount.balance}`;
        const printInterestRate = `your interest rate is ${savingsAccount.interestRatePercent}%.`
        return 'welcome!\n' + printBalance + ' and ' + printInterestRate;
    }
  };

  let facebookProfile = {
      name: 'Eric',
      friends: 0,
      messages: [],
      post: function postMessage(message) {
            facebookProfile.messages.push(message);
      },
      delete: function deleteMessage(index) {
          facebookProfile.messages.splice(index,1);
      },
      // incremenet by 1
      add: function addFriend() {
          facebookProfile.friends += 1;
      },
      // decrement by 1
      remove: function removeFriend() {
          facebookProfile.friends -= 1;
      }
    };


let donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
    ];

const donutSummary = (donuts.forEach(donut => {
    console.log(`${donut.type} donuts cost $${donut.cost} each`);
}));

/*
 * Javascript ES6 
 */


function getClothing(isCold) {
    let warm;
    if (isCold) {
      var freezing = 'Grab a jacket!';
      warm = 'take off your jacket';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
    console.log(freezing);
    //console.log(warm);
  }
getClothing(false);

/*
 * temporal dead zone - variables declared with let & const (block scoped)
 *
 * 
 */