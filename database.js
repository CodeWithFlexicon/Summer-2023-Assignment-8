const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS books_inventory(
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        genre VARCHAR(20) NOT NULL,
        publishDate DATE,
        quantity INTEGER
    );
`;

const createBookInventory = async () => {
  try {
    await pool.query(createTableQuery);
    console.log("Books can now be managed");
  } catch (error) {
    console.error("An error has occurred while creating the table", error);
  }
};

createBookInventory();

module.exports = {
  query: (text, params, callback) => {
    console.log("QUERY:", text, params || "");
    return pool.query(text, params, callback);
  },
};
