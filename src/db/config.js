import dotenv from 'dotenv';
dotenv.config();
import pkg from 'pg';
const { Pool } = pkg;
// Set database connection credentials
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const config = {
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
};


// Create pg pool
const pool = new Pool(config);

export default pool;