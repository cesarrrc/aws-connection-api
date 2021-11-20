const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'database-1.crupkvwsk75b.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'newDB2'
})

module.exports = connection