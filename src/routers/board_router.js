const express = require("express");
const {loginRequired} = require("../middlewares/login-required");
const boardRouter = express.Router();

// const {boardService} = require("../service");
const { getBoard, getBoardMyData} = require("../service/board_service");


// @route    POST api/board/register/:userId
// boardRouter.post('/', loginRequired, async (req, res, next) => {
//     try {
//         const userId = req.userId;
//         const lat = req.body.latitude;
//         const long = req.body.longtitude;
//         const password = req.body.password;
//         const board = await createBoard(userId)
//         res.status(201).json(board);
//     } catch (error) {
//         next(error)
//     }
// })

// 2. 게시물 조회 (좋아요순서, 시간순서, 거리순서)
boardRouter.get('/', async (req, res, next) => {
    try {
        // const orderBy = req.query;
        const board = await getBoard()
        res.json(board);
    } catch (error) {
        next(error)
    }
})

// 내가 등록한 게시글 조회
boardRouter.get('/me', loginRequired, async function (req, res, next) {
    try {
        const userId = req.userId;
        const myboard = await getBoardMyData(userId);
        res.json({"board": myboard});

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
