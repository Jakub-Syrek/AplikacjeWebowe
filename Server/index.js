const express = require('express');
const bodyParser= require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors')

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/';
const dbName = 'star-wars-quotes';


app.use(bodyParser.json())

app.use(cors())

app.get('/test', (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    res.send('Welcome to the backend!')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/quotes',cors(), (req, res) => {

    console.log(req.body)

    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var myobj = req.body;

        var coll = dbo.collection("Quotes")
        insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted to Mongo Collection");

            db.close();
        });
    });

    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);

        var collSize = await dbo.collection("Quotes").countDocuments()
        console.log("Collection size now:" + collSize);
    });

    res.send( req.body + ' inserted')
})

app.post('/quotes',cors(), (req, res) => {

      console.log(req.body)

    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var myobj = req.body;

        dbo.collection("Quotes").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted to Mongo Collection");

            db.close();
        });
    });

    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);

        var collSize = await dbo.collection("Quotes").countDocuments()
        console.log("Collection size now:" + collSize);
    });

    res.send( req.body + ' inserted')
})

app.delete('/quotes',cors(), (req, res) => {

    console.log(req.body)

    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var myobj = req.body;

        dbo.collection("Quotes").findOneAndDelete({name: myobj.name})

        if (err) throw err;
        console.log("1 document deleted from Mongo Collection");

        //db.close();
    });

    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);

        var collSize = await dbo.collection("Quotes").countDocuments()
        console.log("Collection size now:" + collSize);
    });
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log('App is listening on port ' + port);