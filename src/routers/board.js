const express = require('express');
const boardRouter = express.Router();

const { loginRequired } = require("../middlewares/login-required");
const { boardService } = require("../service");


// 1. 게시판 등록
boardRouter.post("/", loginRequired, async (req, res, next) => {
    try {
      const userId = req.userId;
      const studyData = req.body.study;
      const tag = req.body.tag;
      const newStudy = await studyService.addStudy(userId,studyData);
      const studyId = newStudy.dataValues.id;
      await studyTagService.addStudyTag(tag, studyId);
  
      res.status(201).json({'studyId':studyId});
    } catch (error) {
      next(error);
    }
  });
  
  
// 2. 게시판 삭제
boardRouter.delete('/:boardId', async (req, res, next) => {
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