const express = require('express');
const path = require('path');const app = express();
// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/test', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Welcome to the backend!')
})
//Set the port that you want the server to run onconst 
port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);