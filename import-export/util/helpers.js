// import exported code parts from different files with the commonJS syntax
const constants = require('../constants.js');

function getCurrentDate() {
    return new Date();
}

function lowerCaseName() {
    return constants.name.toLowerCase();
}

// export code parts to other files with the commonJS syntax
module.exports = {getCurrentDate, lowerCaseName};