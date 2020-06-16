var assert = require('assert');
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
    for (let index = 0 ; n > index ; n--)
    {
        console.log(n);
    
    }
}
factorial(3);

