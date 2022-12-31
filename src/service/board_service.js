const { models } = require('../db/index'); 
const board = require('../db/models/board');


// const createBoard = async(userId) => {
//     // TODO: 보드테이블추가, 이미지테이블추가 => 보드이미지테이블추가, 태그테이블 추가 => 보드태그테이블추가, 보드어드레스 테이블 추가
//     // 상세페이지X => 일단 보드 이미지랑 보드테이블 정도만 하면 된다.
//     // 거리순 조회 구현 시 => 보드어드레스테이블 로우 필요해짐
//     // 게시글 등록할 때 시간

// // clothes_style, 
    
//     return  
// }


// 2. 게시물 조회 (옵션)
// 2-1. 시간 순서
const getBoard = () => {
    return models.board.findAll({ 
    order: [['created_at', 'DESC']]
})
}

const getBoardMyData = async (userId) => {
    //TODO : 보드테이블 정보, 보드이미지(=>이미지테이블) URL정보 반환
    const boardData = await models.board.findAll({ where: { user_id: userId }});
    // const myBoard = await boardData.id;
    // const boardId = await myBoard.id;
    // const boardImage = await models.board_image.findAll( { where: { board_id: boardId  }})
    // const imageId = await boardImage.image_id;
    // const imageUrl = await models.image.findAll({where: {id : imageId}})

    //return {"boardData": boardData ,"imageUrl":imageUrl}
    return {"boardData": boardData} ;
}

// 3. 게시물에 좋아요 누르기

// 4. 게시물에 좋아요 취소하기

// 5. 게시물 삭제하기
const delBoardMyData = async (userId) => {
    return;
}

module.exports = { getBoard, getBoardMyData, delBoardMyData};
