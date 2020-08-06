const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: EVENTUALLY PASSPORT SESSION WHATNOT HERE

app.use(express.static('server/public'));

// PRIMARY APP ROUTES

// API ROUTES

// OAUTH ROUTES

module.exports = app;
