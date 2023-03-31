// Classes

class Student {
    #id;
    #name;
    constructor(id, name, course) {
        this.#id = id;
        this.#name = name;
        this.course = course;
        this.passedExams = [];
    }

    printStudentInfo() {
        console.log(`${this.id} - ${this.name} - ${this.course}`);
    }

    printPassedExams() {
        this.passedExams.forEach(exam => {
            console.log(`${this.name} passed ${exam}`);
        });
    }

    addPassedExam(exam) {
        this.passedExams.concat([exam]);
    }

    static isStudent(student) {
        return student instanceof Student;
    }

    get id() {
        return this.#id;
    }

    set id(newId) {
        if (newId > 0) {
            this.#id = newId;
        }
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

}

// new instance of Student
const peter = new Student(1, 'Peter Pan', 'CS50');

peter.printStudentInfo();

const mary = {
    id: 2,
    name: "Mary Poppins",
    course: 'CS50',
    passedExams: ['Maths1']
};


console.log(Student.isStudent(peter));
console.log(Student.isStudent(mary));

console.log(peter.id, peter.name);

peter.id = 2;
peter.name = 'Peter Poppins';

console.log(peter.id, peter.name);

class Vehicle {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    drive() {
        console.log(`The ${this.color} ${this.brand} ${this.model} is driving...`);
    }
}

const car = new Vehicle('BMW', '318', 'red');

car.drive();

class Truck extends Vehicle {
    constructor(brand, model, color, maxPayload) {
        super(brand, model, color);
        this.maxPayload = maxPayload;
    }

    unloadPayload() {
        console.log(`Unloading the stored goods...`);
    }
}

const sandTransporter = new Truck('MAN', 'xyz', 'green', 40000);
console.log(sandTransporter.brand, sandTransporter.model, sandTransporter.color);
sandTransporter.drive();


/* 
    Write class to represent a computer.
    This should have the following class member fields:
    - brand
    - model
    - ram
    - cpuFreq
    - price

    The class should also have a static method that creates new instance of the computer class
    with default values, which you can choose freely.

    Further the class should have a few instance methods:
    - startComputer() - Should print that the computer is started AND should set some indicator of that instance that the computer is running
    - startProgram(program) - It should only start the program, when the computer is started already
    - shutdownComputer() - Should print that the computer is shutting down AND should set some indicator of that instance that the computer is not running
*/
class Computer {
    #price;
    constructor(brand, model, ram, cpuFreq, price) {
        this.brand = brand;
        this.model = model;
        this.ram = ram;
        this.cpuFreq = cpuFreq;
        this.#price = price;

        this.isRunning = false; // computer running state
    }

    static create(brand='Lenovo', model='ThinkPad', ram='16GB', cpuFreq='3Ghz', price=1000) {
        // return new Computer(brand, model, ram, cpuFreq, price);
        return new this(brand, model, ram, cpuFreq, price);
    }

    startComputer() {
        this.isRunning = true; // set running state to true

        console.log('Computer is starting...');

        return this; // return the instance in order to chain follow-up commands
    }

    shutDownComputer() {
        this.isRunning = false; // set running state to false

        console.log('Computer is shutting down...');

        return this; // return the instance in order to chain follow-up commands
    }

    startProgram(program) {
        if (!this.isRunning) {
            console.error('The computer is not yet started!');
            return; // early return
        }

        console.log(`Starting the program ${program}...`);
    }

    runJS(jsCode) {
        console.time('jsCodeRuntime'); // start a time measurement

        jsCode();

        console.timeEnd('jsCodeRuntime'); // end the time measurement
    }


    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice < 0) {
            console.error(`The new price of ${newPrice} is too low. Won't be updated!`);
            return; // early return
        }

        this.#price = newPrice;
        console.log(`The price of this computer has been set to ${this.#price}`);
    }
}

const newComp = Computer.create('Apple','MacBook','8GB', undefined, 2500);
console.log(newComp);
newComp.startComputer();
console.log(newComp.isRunning);
newComp.shutDownComputer();
console.log(newComp.isRunning);

// computer is still off
newComp.startProgram('Photoshop');
newComp.startComputer().startProgram('Photoshop');


/* 
    Extend the computer class by another instance method 'runJS'
    that takes a callback function as it's argument and then runs that callback function
    and apart from that it prints the time the callback took to run.
*/
newComp.runJS(() => {
    let array = [1,2,3,4,5,6,7,8];
    array.forEach(elem => {
        console.log(elem);
    });
});


/* 
    Modify the computer class so that the price field becomes private.
    Also define a getter and a setter method for the private price field
    where the setter would only update the price if the passed argument is not lower than 0.
    The setter should give a little debug printout to the terminal indicating what it just did.
*/
newComp.price = -100; // won't update the price, because too low
newComp.price = 3000; // updates the price to 3000
console.log(newComp.price);

/* 
    Create a new subclass of the computer class that specifies a laptop.
    It should get an additional member variable 'hasDedicatedGraphics' that indicates
    whether the laptop has a dedicated graphics cards or not.
    This subclass should also get two additional instance methods for opening and closing the computer.
    Come up with a opening status field for the instance so that it is possible to know whether 
    the laptop is opened or closed.
*/
