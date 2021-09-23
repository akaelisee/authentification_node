require('dotenv').config()
const mysql = require('mysql');

// Create connection
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'authentificat',
});

pool.connect();
module.exports = pool;


// require('dotenv').config()
// const mysql = require('mysql');

// // Create connection
// const pool = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DBNAME,
// });

// pool.connect();
// module.exports = pool;