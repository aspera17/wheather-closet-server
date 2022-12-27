const express = require("express");
const { loginRequired } = require("../middlewares/login-required");
const boardRouter = express.Router();

const { boardService } = require("../service");


// 1. 게시물 등록
boardRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    const userId = req.userId;
    // const boardAddress = ;
    // const boardImage = ;
    // const clothStyle = ;
    // const tag = req.body.tag 
  } catch(error) {
    next(error)
  }})

// 2. 기본 게시물 조회 (시간 순서)
boardRouter.get('/', /*loginRequired*/ async (req, res, next) => {
    try { const board = await boardService.getBoardByTime()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 3. 게시물 조회 (좋아요 순서)
// get
// 4. 게시물 조회 (거리가 가까운 순서)
// 5. 게시물에 좋아요 누르기
// 6. 게시물에 좋아요 취소하기
// 7. 게시물 삭제하기

module.exports = boardRouter;
