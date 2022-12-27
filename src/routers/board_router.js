const express = require("express");
const { loginRequired } = require("../middlewares/login-required");
const boardRouter = express.Router();

const { boardService } = require("../service");


// 1. 게시물 등록
boardRouter.post('/:userId', /*loginRequired,*/ async (req, res, next) => {
    try { 
        const board = await boardService.createBoard()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 2. 게시물 조회 (시간 순서 - 기본)
boardRouter.get('/', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardByTime()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 3. 게시물 조회 (좋아요 순서)
boardRouter.get('/?like=1', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardByLike()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 4. 게시물 조회 (거리가 가까운 순서)
boardRouter.get('/?lat=25.123&lon=125.1231', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardByDistance()
        ()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 5.게시물 조회 (마이 페이지)
boardRouter.get('/?mypage=1', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardByLike()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 6. 게시물에 좋아요 누르기
boardRouter.post('/like/:userId', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardByMe()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 7. 게시물에 좋아요 취소하기
boardRouter.post('/unlike/:userId', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.postBoardLike()
        res.json(board);
    } catch(error) {
      next(error)
    }})

// 8. 게시물 삭제하기
boardRouter.delete('/:boardId', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.postBoardUnlike()
        res.json(board);
    } catch(error) {
      next(error)
    }})

//9. 태그 목록 조회
boardRouter.get('/tag', /*loginRequired*/ async (req, res, next) => {
    try { 
        const board = await boardService.getBoardTag()
        res.json(board);
    } catch(error) {
      next(error)
    }})

module.exports = boardRouter;
