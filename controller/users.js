const connection = require('../sql/connection');

const newUser = (req, res, next) => {
    console.log("*********** ", req.body)
    const {PersonID, LastName, FirstName, City, State, Address} = req.body
    if(req.body){
        const sql = `INSERT INTO Person VALUES (?,?,?,?,?,?)`
        let body = []
        body.push(PersonID, LastName, FirstName, City, State, Address)
        console.log(`this is your current body: `, body)
        connection.query(sql, body, function(error, results){
            if(error){
                console.log(`there is an error: `, error)
                res.status(500)
            } else {
                next()
            }
        })
    }
}

const newUserTable = (req, res) => {
    console.log('adding a new table for the user: ', req.body.FirstName)
    const {FirstName} = req.body
    if(req.body){
        const sql = `
            CREATE TABLE ${FirstName}Table (
                itemID int,
                ColumnA varchar(255),
                ColumnB varchar(255)
            )
        `
        connection.query(sql, function(error, results){
            if(error){
                console.log(`there is an error: `, error)
                res.status(500)
            } else {
                res.send(results)
            }
        })
    }

}

module.exports = { newUser, newUserTable }