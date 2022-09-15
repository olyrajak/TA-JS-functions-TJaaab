// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
    return String(n);
}

// - Write a Function Expression
let convertToString = function(n) {
    return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
    return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
    return n + 1;
}

// - Write a Function Expression
let addOne = function(n) {
    return n + 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;
// - Write an Arrow Function with curly brackets
let addOne = (n) => {
    return n + 1;
};
// - Execute the function
addOne(1);
// - Execute the function and store the return value in a variable.
let returnValue = addOne(2);
// - What is the typeof returnValue
//******the tupeof returnValue is Number */
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/


// - Write a Function Declaration
function substractOne(n) {
    return n - 1;
}
// - Write a Function Expression
let substract = function(n) {
        return n - 1;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let substract = (n) => n - 1;
// - Write an Arrow Function with curly brackets
let substract = (n) => {
        return n - 1;
    }
    // - Execute the function
substract(1);
// - Execute the function and store the return value in a variable.
let returnValue = substractOne(10);
// - What is the typeof returnValue
//******the typeof returnValue is Number */

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(n1, n2) {
    return n1 + n2;
}
// - Write a Function Expression
let sum = function(n1, n2) {
        return n1 + n2;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let sum = (n1, n2) => n1 + n2;
// - Write an Arrow Function with curly brackets
let sum = (n1, n2) => {
        return n1 + n2;
    }
    // - Execute the function
sum(2, 4)
    // - Execute the function and store the return value in a variable
sum(2, 5);
// - What is the typeof returnValue
//******the typeof returnValue is Number */
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
    return n * n;
}
// - Write a Function Expression
let square = function(n) {
        return n * n;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n * n;
// - Write an Arrow Function with curly brackets
let square = (n) => {
        return n * n;
    }
    // - Execute the function
square(44);
// - Execute the function and store the return value in a variable
square(45);
// - What is the typeof returnValue
//*the typeof returnValue is Number */

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
    return x > y;
}
// - Write a Function Expression
let isGreater = function(x, y) {
        return x > y;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y;
// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
        return x > y;
    }
    // - Execute the function
isGreater(2, 4);
// - Execute the function and store the return value in a variable.
isGreater(2, 5);
// - What is the typeof returnValue
//******the typeof returnValue is Boolean */
/* 6. Find isLesser

Write a function named isLesser that accepts two numbers`x` and`y` and returns`true` if x is lesser than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isLesser(x, y) {
    return x < y;
}
// - Write a Function Expression
let isLesser = function(x, y) {
        return x < y;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let isLesser => (x, y) => x < y;
// - Write an Arrow Function with curly brackets
let isLesser => (x, y) => {
        return x < y;
    }
    // - Execute the function
isLesser(2, 4);
// - Execute the function and store the return value in a variable.
isLesser(2, 5);
// - What is the typeof returnValue
//******the typeof returnValue is Boolean */
/* 7. Find isEqual

Write a function named isEqual that accepts two numbers`x` and`y` and returns`true` if x is equal to y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isEqual(x, y) {
    return x === y;
}
// - Write a Function Expression
let isEqual = function(x, y) {
        return x === y;
    }
    // - Write an Arrow Function without curly brackets(if possible)
let isEqual = (x, y) => x === y;
// - Write an Arrow Function with curly brackets
let isEqual = (x, y) => {
    return x === y;
}

// - Execute the function
isEqual(2, 4);
// - Execute the function and store the return value in a variable
isEqual(2, 5);
// - What is the typeof returnValue
//******the typeof returnValue is Boolean */
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n) {
    if (n % 2 === 0) {
        return "Number is even";
    } else {
        return "Number is odd";
    }
}
// - Write an anonymous Function Expression
let oddOrEven = function(n) {
        if (n % 2 === 0) {
            return "Number is even";
        } else {
            return "Number is odd";
        }
    }
    // - Write an named Function Expression
let oddOrEven = function(n) {
        if (n % 2 === 0) {
            return "Number is even";
        } else {
            return "Number is odd";
        }
    }
    // - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => n % 2 === 0 ? "Number is even" : "Number is odd";
// - Write an Arrow Function with curly brackets
let oddOrEven = (n) => {
        return n % 2 === 0 ? "Number is even" : "Number is odd";
    }
    // - Execute the function
oddOrEven(2);
// - Execute the function and store the return value in a variable
oddOrEven(3)
    // - What is the typeof returnValue
    //******the typeof returnValue is Number */
