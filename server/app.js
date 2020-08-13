require('dotenv').config();
const express = require('express');
const compression = require('compression');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(compression);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    key: 'user',
    resave: 'false',
    saveUninitialized: false,
    maxAge: 60 * 60 * 1000 * 24 * 30, // 30 days
    secure: false,
  })
);

app.use(express.static('build'));

// PRIMARY APP ROUTES

// API ROUTES

// OAUTH ROUTES

module.exports = app;
