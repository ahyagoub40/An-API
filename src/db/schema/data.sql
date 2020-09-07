-- drop tables and recreate
DROP TABLE IF EXISTS users CASCADE;

-- create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(225) NOT NULL,
  email VARCHAR(225) NOT NULL
);