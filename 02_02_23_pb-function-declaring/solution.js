
/* 
  1. Multiply - Function Declaration
  Create a function named multiply that prints the result of multiplying a number by another number.
*/
function multiply(num1, num2) {
  // let result = 0;

  // result = num1 * num2;

  // console.log(result);

  console.log(num1 * num2);
}

// multiply(2, 3);
// multiply(2, 6);

/* 
  2. Multiply - Function Declarations as Value
  Create a copy of the above function but change the syntax so that 
  the function declaration is assigned to a variable named myMultiply.
*/
const myMultiply = function(num1, num2) {
  console.log(num1 * num2)
}

/* 
  3. Multiply - Arrow Function
  Create a copy of the above function but change the syntax so that 
  it uses the arrow function shorthand and store it in a new variable named myMultiplyFunc.
*/
const myMultiplyFunc = (num1, num2) => console.log(num1 * num2);

// function returningFunction(arg1, arg2) {
//   return arg1+arg2;
// }

// An one-liner arrow function without curly braces doesn't need the return keyword, it just returns the value of the statement in there
const myReturningFuntion = (arg1, arg2) => arg1+arg2;
myReturningFuntion(1, 2); // -> returns 3;


/* 
  4. Declarations
  Create a function to check the remainder of division given two numbers. 
  Use all three declaration options to store copies of it under three names: 
    remainderOfDivision1, remainderOfDivision2 and remainderOfDivision3.
*/
// As a named classic function
function remainderOfDivision1(num1, num2) {
  console.log(num1 % num2);
}
remainderOfDivision1(4, 2);
remainderOfDivision1(5, 2);

// As an anonymous function stored in a constant
const remainderOfDivision2 = function(num1, num2) {
  console.log(num1 % num2);
};
remainderOfDivision2(4, 2);
remainderOfDivision2(5, 2);

// As an arrow function stored in a constant
const remainderOfDivision3 = (num1, num2) => {
  console.log(num1 % num2);
};
remainderOfDivision3(4, 2);
remainderOfDivision3(5, 2);








// Write programs that produce the following outputs: 
// 1 1 1 2 2 2 3 3 3 4 4 4
function printRangeXTimes(startValue, endValue, repetitions) {
  // result variable, which stores the complete sequence
  let sequence = '';

  // iterates through the actual numbers, that change
  for (let i = startValue; i <= endValue; i++) {

    // iterates from 0 to times
    // it repeats the stuff "repetitions" times
    for (let j = 0; j < repetitions; j++) {
      // concatenates the current outter index with the yet built sequence
      sequence = sequence + i + ' ';
    }
  }

  console.log(sequence);
}
printRangeXTimes(1, 4, 3);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
function printSequenceThreeTimes(startValue, endValue, repetitions) {
  // result variable, which stores the complete sequence
  let sequence = ''; 

  // iterate "repetitions" times in steps of one
  // repeat the same stuff "repetitions" times 
  for (let i = 0; i < repetitions; i++) {
    // iterates from "startValue" to "endValue" in steps of one
    for (let j = startValue; j <= endValue; j++) {
      // concatenates the result sequence with the current index of the inner loop
      sequence = sequence + j + ' ';
    }
  }


  console.log(sequence);
}

// printSequenceThreeTimes(0, 4, 3);