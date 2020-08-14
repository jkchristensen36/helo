// required packages
require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    app = express(),
    { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
    ctrl = require('./controller'),

app.use(express.json());


// massive
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
    }).then ( db => {
        app.set('db', db)
        console.log('Connected to db')
    }).catch( err => console.log(err))

// endpoints
app.post('auth/register', ctrl.register)
// app.post('/auth/login', ctrl.login)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))