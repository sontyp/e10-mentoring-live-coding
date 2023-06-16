// Import the important dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// -------------------------------------------------------------------------

// Preload the enviroment variables
dotenv.config();

// Instatiate the express application in a variable
const app = express();

// Register expresses JSON parsing middleware to the application
// It hooks into any request and parses the body content into JSON
app.use(express.json());

// Register cors package as middleware to the application
// and provide CORS configuration
// CORS is a security feature that handles WHO can access the server and HOW
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers']
}));


// ----------------------------------------------------------
const PEOPLE = [
    {
        id: 1,
        name: 'Peter Pan',
        age: 12
    },
    {
        id: 2,
        name: 'Mary Poppins',
        age: 35
    },
    {
        id: 3,
        name: 'Captain Hook',
        age: 43
    }
];

// -------------------- ENDPOINTS ---------------------------
app.get('/hello', (request, response) => {
    // extract the data in the body from the request
    const requestBody = request.body;

    console.log(requestBody);

    // Send a JSON response to the requesting client
    response.send({
        yourFoo: requestBody.foo,
        status: 'OK'
    });

    // OR send some HTML
    // response.send(`
    // <html>
    // <h1>Hello World!</h1>
    // </html>
    // `);
});

// GET Endpoint for the people resource that returns multiple or all entries with optional filtering
app.get('/people', (req, res) => {
    // Extract query parameters from the request object
    const {name, age} = req.query;

    // An empty array for the filtering results
    const filterResult = [];

    // Loop through all the people for filtering
    PEOPLE.forEach(person => {
        // check whether the persons name property includes the given name query parameter
        const includesName = person.name.toLowerCase().includes(name?.toLowerCase());

        // check whether name query param is existent and whether the value of it is included in the person's name prop
        const matchesName = name && includesName;

        // check whether age query param is existent and whether the value of it is equal to the person's age prop
        const matchesAge = age && person.age === Number(age);

        // If any of those matching statement is true, add the current person to our filtering result
        if ( matchesName || matchesAge ) {
            filterResult.push(person);
        }
    });

    // // Arrays for filtering results of query parameters
    // let nameResult = [];
    // let ageResult = [];

    // // filter people by the inclusion of the name query parameter in their name property
    // if (name) {
    //     nameResult = PEOPLE.filter(person => {
    //         return person.name.toLowerCase().includes(name?.toLowerCase());
    //     });
    // }
    
    // // if the age query parameter can be casted to a valid number that is not NaN
    // if (!isNaN(Number(age))) {
    //     // filter people by the equality of their age property with the age query parameter
    //     ageResult = PEOPLE.filter(person => {
    //         return person.age === Number(age);
    //     });
    // }

    // Result variable preloaded with ALL people
    let result = PEOPLE;

    // In case any query parameter was provided
    if (name || age) {
        // Rewrite the result to be the merged filter results
        // Mash them into a Set to ensure value uniqueness
        // turn the set back into an array
        // SMARTER: filter everything in one big for loop
        // result = Array.from(new Set(nameResult.concat(ageResult)));
        result = filterResult;
    }

    // Send back the requested information
    res.send(result);
});

// GET Endpoint for the people resource that returns a single entry filter by it's ID
app.get('/people/:id', (req, res) => {
    // Extract ID from URL parameters and parse to an integer
    // If the parameter starts with numerical characters and is followed by alphabetical characters,
    // because parseInt is funky :)
    // const id = parseInt(req.params.id);
    // The Number constructor behaves more save in this scenario, 
    // but produces a NaN if the input can't be parsed to a number
    const id = Number(req.params.id);

    // If ID is not an integer
    if (isNaN(id)) {
        // Send an error response with HTTP status code 400 (BAD REQUEST)
        res.status(400).send({
            error: 'The resource ID must be an integer'
        });

        // early return to step out of the function
        return;
    }

    // Find person by ID from PEOPLE array
    const person = PEOPLE.find(elem => elem.id === id);

    // If person not found
    if (!person) {
        // Send an error response with HTTP status code 404 (NOT FOUND)
        res.status(404).send({
            error: `Person with ID ${id} not found`
        });

        // early return to step out of the function
        return;
    }

    // success! Send back requested person entry
    res.send(person);
});

app.post('/people', (req, res) => {
    // extract new entry data from body
    const {name, age} = req.body;

    // If name property is not included in the body
    if (!name) {
        // Send an error back to the client
        res.status(400).send({
            error: 'Field name is required!'
        });

        // early return because of validation fail
        return;
    }

    // If age property is not included in the body
    if (!age) {
        // Send an error back to the client
        res.status(400).send({
            error: 'Field age is required!'
        });

        // early return because of validation fail
        return;
    }

    // If age property cannot be interpreted as a number
    if (isNaN(Number(age))) {
        // Send an error back to the client
        res.status(400).send({
            error: 'Field age must be a number!'
        });

        // early return because of validation fail
        return;
    }

    // Create new entry
    const newPerson = {
        id: genNewId(PEOPLE),
        name,
        age: Number(age)
    };

    // Add entry to array
    PEOPLE.push(newPerson);

    // Return newly created entry to client
    res.send(newPerson);
});


// Start the server listening process on a specified port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



// -------------------------- HELPERS -----------------------------
// Helper function that finds the highest used ID and creates a new not yet taken one
const genNewId = (arr) => {
    let maxId = 0;

    arr.forEach(item => {
        if (item.id > maxId) maxId = item.id;
    });

    return maxId + 1;
};