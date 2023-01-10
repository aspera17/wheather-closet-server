const jwt = require('jsonwebtoken');

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
    const key = process.env.JWT_SECRET_KEY;
    const payload = jwt.verify(accessToken, key);
    req.userId = payload.sub;
    req.userEmail = payload.email;
    // const secret = jwt.verify(refreshToken, key);
    // req.resuserId = secret.subb;
    next();
  } catch (err) {
    res.send({ errorMessage: err + ' : 로그인이 필요합니다.' });
  }
};

module.exports = { loginRequired };
