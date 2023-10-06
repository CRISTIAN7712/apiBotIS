require('dotenv').config()
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser')
const { databaseServices } = require('./services/databaseService')

const app = express();

// Mover la configuración del cors aquí
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json())

require('./routes')(app, databaseServices());
app.listen(3001, function () {
    console.log('BD listening on port 3001!');
})