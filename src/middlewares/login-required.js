const { jwt } = require('jsonwebtoken');
require('dotenv').config();
// const { dotenv } = require('dotenv');
// import dotenv from 'dotenv';

// require('dotenv').config();


const loginRequired = (req, res, next) => {
  const accessToken = req.headers['authorization']?.split(' ')[1];
  if (!accessToken || accessToken === 'null') {
    res.status(401).send({
      result: 'forbidden-approach',
      message: '로그인한 유저만 사용할 수 있는 서비스입니다.',
    });

    return;
  }

  try {
    //헤더에 있는 토큰 decode
    const key = process.env.SECRET_KEY;
    const user = jwt.verify(accessToken, key);
    req.currentUserIdx = user.user_idx;
    req.currentUserEmail = user.email;
    next();
  } catch (err) {
    res.send({ errorMessage: err + ' : 로그인이 필요합니다.' });
  }
};

module.exports = { loginRequired };
