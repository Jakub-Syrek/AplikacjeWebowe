const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');
const app = express();

const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

conn = MongoClient.connect('mongodb://localhost:27017/', {
        dbName: 'star-wars-quotes',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
    })



// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/test', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Welcome to the backend!')
})
app.get('/', (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'star-wars-quotes';

app.post('/quotes', (req, res) => {

    MongoClient.connect('mongodb://localhost:27017/', {
        dbName: 'star-wars-quotes',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).
        then(async client => {
        await client.db().collection("Quotes").insertOne(
            req.body
        )
        let col = await client.db().collection("Quotes").countDocuments()
        console.log('Connected to Database inserting')
        console.log('Currently records: ' + col)
    })

    console.log(req.body)
})


//Set the port that you want the server to run onconst 
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);