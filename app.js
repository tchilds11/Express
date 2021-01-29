'use strict'

const HTTP = require('http');

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// Setup thr public folder for all static items
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const ceosController = require('./routes/ceos');

app.use('/', rootController); //<- ROOT CONTROLLER
app.use('/ceos', ceosController); //<- /CEOS route
