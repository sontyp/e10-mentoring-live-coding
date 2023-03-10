// import exported code parts from different files with the commonJS syntax
const constants = require("./constants.js");
const helpers = require('./util/helpers.js');

console.log('Doing main important stuff....');

console.log(`The student is called ${constants.name}, speaks ${constants.language} and today is ${helpers.getCurrentDate().toDateString()}`);


console.log(helpers.lowerCaseName());
