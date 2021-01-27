'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, function () {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController); //<- ROOT CONTROLLER
app.use('/friends', friendsController); //<- /friends route
