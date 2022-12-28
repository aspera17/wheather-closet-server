const { models } = require('../db/index'); 

// 1. 게시물 등록
//     const createBoard = () => {
//         return  
// }

// 2. 게시물 조회 (옵션)
// 2-1. 시간 순서
    const getBoardByOption = () => {
        return models.board.findAll(board_id);
}

const getBoardMyData = async () => {
    return models.board.findOne();
}

// 3. 게시물에 좋아요 누르기

// 4. 게시물에 좋아요 취소하기

// 5. 게시물 삭제하기

module.exports = {getBoardByOption, getBoardMyData};
