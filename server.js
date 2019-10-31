// This will be our application entry. We'll setup our server here.
const http = require('http');
const path = require('path');
const express = require('express');
// var morgan = require('morgan');
const bodyParser = require('body-parser');
// Set up the express app
const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
// Console is a global object so if you hijack one of its functions like in below it will keep being hijacked for all files which share that global object.
// require('./server/config/logger').log;
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(morgan("combined"));

// Setup a default catch-all route that sends back a welcome message in JSON format.
// require('./server/routes')(app);
/*app.get('/api/*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));*/