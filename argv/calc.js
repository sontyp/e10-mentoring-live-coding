
const runArgs = process.argv.slice(2);


// function printNames(message, ...names) {
//     names.forEach(name => console.log(message, name));

//     console.log(arguments);
// }

// printNames('Hi, ', 'peter', 'mary', 'kevin', 'mary-ann');

// RUN MODES
// development
// production
// let verboseLogging = false;
// let runMode = runArgs[0];

// if (runMode === 'development') {
//     verboseLogging = true;
//     console.log('Running in developement mode:');
//     console.log('Verbose development logging activated...');
// }


// console.log(parseInt(runArgs[0]) + parseInt(runArgs[1]));

const calcModes = {
    add: 'add',
    sub: 'subtract',
    mult: 'multiply',
    div: 'divide'
};
const calcMode = runArgs[0];
const op1 = runArgs[1];
const op2 = runArgs[2];

switch(calcMode) {
    case calcModes.add:
        console.log(parseInt(op1) + parseInt(op2));
        break;
    case calcModes.sub:
        console.log(parseInt(op1) - parseInt(op2));
        break;
    case calcModes.mult:
        console.log(parseInt(op1) * parseInt(op2));
        break;
    case calcModes.div:
        console.log(parseInt(op1) / parseInt(op2));
        break;
        
    default:
        console.log(`Operation ${calcMode} unknown`);
}