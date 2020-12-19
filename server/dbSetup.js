const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const dbconfig = {
  connectionString: process.env.PG_URI,
};
console.log(dbconfig);
const db = new pg.Pool(dbconfig);

module.exports = {
  query: (text, params) => db.query(text, params),
};
