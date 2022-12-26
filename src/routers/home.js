const express = require('express');
const router = express.Router();

// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!
// const { loginRequired } = require("../middlewares");
// const { userService } = require("../service");

/* GET home page. 배너,유튜브 온도값 받기 */
router.get('/', function(req, res, next) {
    res.send('메인화면, 홈화면 라우터 설정중~~안녕안녕 안녕하세요~ 오늘 하루도 힘내세요!!');
    }
);
  

module.exports = router;