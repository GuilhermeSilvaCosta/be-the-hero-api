const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/week11', routes);
app.use(errors());

module.exports = app;