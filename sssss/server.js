// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware */
// Here we are configuring express to use body-parser as middleware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

// Example GET route
app.get('/example', function (req, res) {
    res.send('Example GET route');
});

// Example POST route
app.post('/example', function (req, res) {
    res.send('Example POST route');
});
