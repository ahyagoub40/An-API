// link to the mysql pool connection
const pool = require('../db/config');

// our routes
const router = app => {
  app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({ message: 'Hello, Server' });
  });
  app.get('/users', (request, response) => {
    pool.query(`SELECT * FROM users`, (error, result) => {
      if (error) throw error
      response.send(result.rows);
    });
  });
};

module.exports = router;