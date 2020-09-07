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
  app.post('/users', (request, response) => {
    const { name, email } = request.body;
    pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $1)', [name, email],
      (error) => {
        if (error) {
          throw error;
        }
        response.status(201).json({ status: 'success', message: 'user added' });
      });
  });
};

module.exports = router;