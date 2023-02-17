

// Student object
const student = {
    firstName: 'Peter',
    lastName: 'Pan',
    age: 12,
    hobbies: [
        'flying',
        'swimming',
        'playing on cpt. Hook'
    ],
    paidTutionFee: false,
    schoolNotes: [
        {
            text: 'Bla bla bla',
            date: '2023-01-04'
        },
        {
            text: 'Foo Bar',
            date: '2023-01-05'
        }
    ],
    // definining a method -> key: function () {...}
    fly: function() {
        console.log('Peter is flying...');
    },
    // defining a method without explicit 'function' keyword mention
    listen() {
        console.log(`${this.firstName} is listening...`);
    }
};


// console.log(student);

// a loop to iterate through the array of hobbies as a property of the student object
// for (let i = 0; i < student.hobbies.length; i++) {
    // store the current of the iteration in a variable
    // let hobby = student.hobbies[i];
    // print the new variable's value
    // console.log(hobby);

    // Or do it in one line
    // console.log(student.hobbies[i]);
// }

// a shorthand for the loop above,
// it omits the use of indexes and just accesses the values directy
// in steps of one
// for (const hobby of student.hobbies) {
//     console.log(hobby);
// }

/* 
    {
        key: value // whole thing is a property
    }
*/
// Looping the keys of the properties of the object student
for (let key in student) {
    // extracting the value of the property with name which is stored in 'key' of the object 'student'
    let value = student[key];

    // logging the current key and the extracted value
    console.log(key, value);

    // defining a new empty object
    let newObject = {};

    // define a new property of the name key
    // and assigning a the value of the property of key in the student object
    newObject[key] = student[key];
}

// calling an object's method
student.fly();

// student.listen = function() {
//     console.log('Student is listening...');
// };

student.listen();

// adding a method to an object externally
student.goHome = function() {
    // the this keyword is bound to the object it's defined on
    console.log(`${this.firstName} goes home...`);
}

// student.goHome = () => {
    // The this keyword has no binding to the object it's called on
//     console.log(`${this.firstName} goes home...`);
// }

// function goingHome() {
//     console.log('Student goes home...');
// }
// student.goHome = goingHome;

student.goHome();

let obj = {
    key: 'value',

    classicFnMethod: function() {
        console.log(this);
    },

    arrowFnMethod: () => console.log(this),

}

obj.classicFnMethod();
obj.arrowFnMethod();


// The this-Keyword
function printThisClassic() {
    // 'use strict'
    console.log(this);
}

// when calling it globally, this-keyword is referencing the global object in non-strict-mode
// in strict-mode it's undefined
printThisClassic(); 

let obj1 = {
    getThis: printThisClassic
}

obj1.getThis(); // this points the object obj1

// function outter() {
//     // closure
//     function inner() {
//         console.log(this);
//     }

//     inner();
// }

// outter();


const printThisArrow = () => {
    // 'use strict';
    console.log(this.foo);
    // return this;
};
// this-keyword is referencing the global object in non-strict-mode
// and undefined in strict-mode
printThisArrow();


let obj2 = {
    foo: 'bar',
    getThis: printThisArrow,
    getThisArrow: () => {
        console.log(this);
    }
};

// doesn't have a this-binding to obj2
obj2.getThis();

function printThisGlobally() {
    console.log(this);
}

// A function taking a callback as an argument
function takesCallback(callback) {
    console.log('I do some stuff');

    callback();
}

// a function to be used as a callback, printing the this-value
function thisCb() {
    'use strict';
    console.log(this);
}

// this not bound to the context it's passed to
takesCallback(thisCb);


function globalFunction(cb) {
    cb();
}

globalFunction(() => console.log('hi'));

/* 
    Write an object classroom, which stores
    - a name for the class
    - an array of student objects {
        name,
        age
    }
    The object should also have a method 'numberOfStudents', which print the length of the student array in it.
    It should have a method which take a new array of students as an argument and if it's an array, 
    it replaces the stored array of students in it.
*/
