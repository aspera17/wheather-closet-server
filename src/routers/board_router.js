const express = require("express");
const {loginRequired} = require("../middlewares/login-required");
const boardRouter = express.Router();

// const {boardService} = require("../service");
const {getBoardMyData} = require("../service/board_service");


// 1. 게시물 등록
boardRouter.post('/:userId', loginRequired, async (req, res, next) => {
    try {
        const board = await boardService.createBoard()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 2. 게시물 조회 (좋아요순서, 시간순서, 거리순서)
boardRouter.get('/', async (req, res, next) => {
    try {
        const board = await boardService.getBoardByOption()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

boardRouter.get('/me', loginRequired, async function (req, res, next) {
    try {
        const myboard = await getBoardMyData();
        res.json({"userId": myboard});

    } catch (err) {
        next(err)
    }

});

// 3. 게시물에 좋아요 누르기
boardRouter.post('/like/:userId', loginRequired, async (req, res, next) => {
    try {
        const board = await boardService.addBoardLike()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 4. 게시물에 좋아요 취소하기
boardRouter.post('/unlike/:userId', loginRequired, async (req, res, next) => {
    try {
        const board = await boardService.addBoardUnlike()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 5. 내가 등록한 게시물 삭제하기
boardRouter.delete('/:boardId', loginRequired, async (req, res, next) => {
    try {
        const board = await boardService.deleteBoard()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

module.exports = boardRouter;
