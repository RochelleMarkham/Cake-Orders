const express = require('express');
const morgan = require ('morgan');
const http = require ('http');
const bodyParser = require('body-parser');
const path = require('path');
//const mongoose = require ('mongoose');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/cake-orders')));
app.use('/', express.static(path.join(__dirname, '../dist/cake-orders')));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: '../dist/cake-orders/'}
    );
});

const PORT = process.env.PORT || 8080;// server port

http.createServer(app).listen(PORT, function() {
    console.log(`Application started and listening on port: ${PORT}`)
});