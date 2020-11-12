import pool from '../db/config.js';

// our routes
export default function router(app) {
  app.get('/users', (request, response) => {
    pool.query(`SELECT * FROM users`, (error, results) => {
      if (error) throw error
      response.status(200).json(results.rows);
    });
  });
};
