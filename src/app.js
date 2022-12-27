const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {boardRouter, userRouter} = require('./routers')
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/user', userRouter)
app.use('/api/board', boardRouter)

module.exports = {app}
