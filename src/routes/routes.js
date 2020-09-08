const pool = require('../db/config');

// our routes
const router = app => {
  app.get('/users', (request, response) => {
    pool.query(`SELECT * FROM users`, (error, results) => {
      if (error) throw error
      response.status(200).json(results.rows);
    });
  });
};

module.exports = router;