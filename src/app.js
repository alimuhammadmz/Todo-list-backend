const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()) // for parsing cookie from requests

const todoRouter = require('./routes/todoRouter.js');

app.use('/api/todo', todoRouter);

module.exports = app;
