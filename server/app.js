const express = require('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser');
const path = require('path');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
