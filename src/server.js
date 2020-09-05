// Require packages and set the port

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const routes = require('./routes/routes');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// calling the routes function
routes(app);

// Start the server
app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${port} 👍`)
});