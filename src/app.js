const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {boardRouter, userRouter, tagRouter, bannerRouter} = require('./routers')
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/user', userRouter)
app.use('/api/board', boardRouter)
app.use('/api/tag', tagRouter)
app.use('/api/banner', bannerRouter)

module.exports = {app}
