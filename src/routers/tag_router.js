// 1. 온도에 따른 태그 관련 정보 출력
// 2. 온도에 따라 나온 메인 태그에 관한 유튜브 출력

const express = require('express');
const tagRouter = express.Router();

// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!
// const { loginRequired } = require("../middlewares");
// const { userService } = require("../service");

/* GET home page. 배너,유튜브 온도값 받기 */
tagRouter.get('/', function (req, res, next) {
        res.send('메인화면, 홈화면 라우터 설정중~~안녕안녕 안녕하세요~ 오늘 하루도 힘내세요!!');
    }
);


module.exports = tagRouter;