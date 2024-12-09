
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = mysql.createPool(dbConfig);

db.getConnection()
  .then(() => {
    console.log('Connection to database established successfully.');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
  });

module.exports = db;
