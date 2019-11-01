// This will be our application entry. We'll setup our server here.
const http = require('http');
const path = require('path');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var logger = require('morgan');
const bodyParser = require('body-parser');
// Set up the express app
const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Let's create a morgan token for logging request hostname.
logger.token('host', function(req, res){return req.hostname});
logger.token('timestamp', function() {return new Date();});
// And log it to console with other parameters
app.use(logger('[:timestamp] :method :host :url :status :res[content-length] - :response-time'));


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(morgan("combined"));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
/* app.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the JRCS HW API',
})); */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));