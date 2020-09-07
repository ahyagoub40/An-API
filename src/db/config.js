require('dotenv').config();
const { Pool } = require('pg');

// Set database connection credentials

const config = process.env.DATABASE_URL || {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};


// Create pg pool
const pool = new Pool(config);

module.exports = pool;