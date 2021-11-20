const express = require('express')
const app = express()
const connection = require('./sql/connection')
const cors = require('cors')
const users = require('./routes/users')

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors())
app.use(users)

const port = 3330

app.get('/', (req,res) => {
    console.log('hello world')
    res.send('hello hello')
})

app.get('/api', (req, res) => {
    connection.query(
        `SELECT * FROM Person`, (error, results) => {
            if(error) {
                console.log("error: ", error)
                res.status(500)
            } else {
                res.json(results)
            }
        }
    )
})


app.listen(port, ()=>{
    console.log('listening on 3330')
})