const express = require("express");
const {loginRequired} = require("../middlewares/login-required");
const boardRouter = express.Router();

const {boardService} = require("../service");


// 1. 게시물 등록
boardRouter.post('/:userId', /*loginRequired,*/ async (req, res, next) => {
    try {
        const board = await boardService.createBoard()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 2. 게시물 조회 (시간 순서 - 기본)
boardRouter.get('/', async (req, res, next) => {
    try {
        const board = await boardService.getBoardByTime()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 3. 게시물 조회 (좋아요순서, 시간순서, 거리순서)
boardRouter.get('/', async (req, res, next) => {
    try {
        const board = await boardService.getBoardByLike()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 7. 게시물에 좋아요 취소하기
boardRouter.post('/unlike/:userId', /*loginRequired*/ async (req, res, next) => {
    try {
        const board = await boardService.postBoardLike()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 8. 게시물 삭제하기
boardRouter.delete('/:boardId', /*loginRequired*/ async (req, res, next) => {
    try {
        const board = await boardService.postBoardUnlike()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

//9. 태그 목록 조회
boardRouter.get('/tag', /*loginRequired*/ async (req, res, next) => {
    try {
        const board = await boardService.getBoardTag()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

module.exports = boardRouter;
