const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// const passport = require('passport');
/* cookieParser, passport 
jwttoken 만들 때 사용하는 거 같음. 쓰려면 모듈 설치 해야 하는 상태.
=> jwt 토큰 지금 제대로 만들어진 게 맞는지 확인하고 어떤 방식으로 만들 건지 정한 다음에 다시 건드리기...!
*/

const loginRequired = require('./middlewares/login-required');
const { boardRouter, userRouter } = require('./routers')

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

// jwt 토큰 사용시 젤 먼저 필요한 거 같음
// app.use(passport.initialize());


// app.use('/api/user', loginRequired, userRouter) // => 여기서 필요한가..?
app.use('/api/user', userRouter)
app.use('/api/board', boardRouter)
// app.use('/api/banner', bannerRouter)


// 에러 처리 베껴왔음.
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app }
