require("dotenv").config({ path: "backend/.env" });
const sql = require("mysql2");

const connectionPool = sql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "nba",
});
const pool = connectionPool.promise();
module.exports = pool;
