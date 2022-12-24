const express = require('express');
const { userRouter } = require('./routers')
const path = require('path');
const morgan = require('morgan');

const routers = require('./routers');

const { sequelize } = require('./db');

const app = express();


sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api/users', userRouter)
app.use('/', routers);

const port = 10000;

app.listen(port, function () {
    console.log('Example app listening on port : ' + port);
});


module.exports = { app }
