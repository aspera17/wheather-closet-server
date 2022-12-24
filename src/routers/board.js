const express = require('express');
const boardRouter = express.Router();

// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!
// const { loginRequired } = require("../middlewares");
// const { userService } = require("../service");


/* POST users content. */
boardRouter.post('/board/content_register', function(req, res, next) {
    res.send('게시글 등록 라우터 설정중');
});

/* DELETE users content. */
boardRouter.delete('delete/:board_id', async (req, res, next) => {
    try {
        // const userId = req.currentUserId;
        const userId = 1;
        const boardId = req.params.board_id;
        //게시글 삭제
        await boardService.deleteMyBoard(userId, boardId);
        const deleteBoard = await boardService.deleteMyBoard(boardId);
    
        res.status(200).json(deleteBoard);
    } catch (error) {
        next(error);
    }}
);  

/* GET users content. */
boardRouter.get('/board_id', function(req, res, next) {
    res.send('게시글 조회 라우터 설정중');
});

/* POST users like. */
boardRouter.post('/board_like_id', function(req, res, next) {
    res.send('게시글 좋아요 라우터 설정중');
});

/* POST users unlike. */
boardRouter.post('/board_like_id', function(req, res, next) {
    res.send('게시글 싫어요 라우터 설정중');
});


/* GET users tag_list. */
boardRouter.get('/', function(req, res, next) {
    res.send('게시글 태그 목록 라우터 설정중');
});

/* GET users weather_geo. */
boardRouter.get('/', function(req, res, next) {
    res.send('위도,경도에 따른 날씨?구하기 라우터 설정중');
});

  

module.exports = boardRouter;