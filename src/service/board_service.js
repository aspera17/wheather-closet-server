const { models } = require('../db/index'); 
const board = require('../db/models/board');

// 1. 게시물 등록
//     const createBoard = () => {
//         return  
// }

// 2. 게시물 조회 (옵션)
// 2-1. 시간 순서
const getBoard = () => {
    return models.board.findAll({ 
    order: [['created_at', 'DESC']]
})
}

const getBoardMyData = async (userId) => {
    // return models.board.findAll();

    const board = await models.board.findAll(
        { where: { user_id: userId }});
    return board;
}

// 3. 게시물에 좋아요 누르기

// 4. 게시물에 좋아요 취소하기

// 5. 게시물 삭제하기

module.exports = {getBoard, getBoardMyData};
