

// FizzBuzz
/* 
    A function that checks a number for being dividable by 3 or 5 or both at the time time.
    Return values:
    div 3 => Fizz
    div 5 => Buzz
    div 3 && div 5 => FizzBuzz
*/

function fizzBuzz(probe) {
    // early return -> return the function as soon as possible, in case some error occured
    if (typeof probe !== 'number') {
        return 'Not a number';
    }

    // probe seems to be number, we can proceed

    /* if ((probe % 3 === 0) && (probe % 5 === 0)) {
        return 'FizzBuzz';

    } else if (probe % 3 === 0) {
        return 'Fizz';
    
    } else if (probe % 5 === 0) {
        return 'Buzz';
    
    } else {
        return 'Not dividable by 3 or 5';
    } */

    // or you ommit the else, since no other is following
    // return 'Not dividable by 3 or 5';


    let returnValue = '';

    // check if testing is dividable by 3
    if (probe % 3 === 0) {
        // concat the result string with the string 'Fizz'
        returnValue += 'Fizz';

        // longer version of +=
        // returnValue = returnValue + 'Fizz';
    }

    // check if testing is dividable by 5
    if (probe % 5 === 0) {
        // concat the result string with the string 'Buzz'
        returnValue += 'Buzz';
    }

    // check both conditions connection with a logical AND 
    // in case you need a completely different outcome if both conditions are met
    // if ((probe % 3 === 0) && (probe % 5 === 0)) {
    //     // overwrite the value completely
    //     returnValue = 'Some different thingy'
    // }

    return returnValue;
}

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));