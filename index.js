const express = require('express') //framework RESTAPI
const bodyParser = require('body-parser') //menghandle req.body dari user dalam bentuk raw data
const cors = require('cors') // allow cross origin resources sharing
const dotenv = require('dotenv') // api bisa baca file .env

// set up express
const app = express()
dotenv.config() // initialize dotenv

// setup widdleware
// middleware => software yang bekerja sebagai perantara
app.use(bodyParser.json())
app.use(cors())

// set up database
const db = require('./database')

// connect to database
db.connect((err) => {
    if (err) return console.log(err)

    console.log(`BD is connected as id : ${db.threadId}`)
})

// get data from database
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users'
    db.query(query, (err, result) => {
        if (err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

// home route
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to My API</h1>`)
})

// apply router
const { testRouter } = require('./routers')
app.use('/api', testRouter)

// binding / host di computer lokal
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running at PORT : ${PORT}`) )