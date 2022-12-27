const { Board, Board_like } = require("../db/models/index.js");



class BoardService {
//     constructor(study_model, recruit_model, like_model, study_tag_model) {
//       this.Study = study_model;
//       this.StudyTag = study_tag_model;
//       this.Recruit = recruit_model;
//       this.Like = like_model;
//     }

// 1. 게시물 등록
//  async createBoard() {}

// 2. 기본 게시물 조회 (시간 순서)
    async getBoardByTime(){
        // board 테이블에서 created_at 순서대로 가져온 다음
        // board에 대한 정보를 반환한다.
        // SELECT * FROM board ORDER BY `created_at` asc LIMIT 100;

        return Board.findAll({
            order: ['createdAt', 'DESC']
        });
    }

// 3. 게시물 조회 (좋아요 순서)
    async getBoardByLike() {
        // board_like 테이블의 board_id 칼럼 중
        // 각 id의 count를 세서 높은 순서대로 가져온다
        // board_id가 동일할 떄 count 숫자 - unklike의 숫자
        const boardLike = Board_like.findAll({
            attributes: [[sequelize.fn('COUNT', sequelize.col('board_id')), 'likCount']]
          });
        
        return boardLike;
    };

// 4. 게시물 조회 (거리가 가까운 순서)
    async getBoardByDistance() {
        // param? 에 담긴 gps 값을 이용해서
        // 가까운 순서대로 가져온다.
        // 전제: 사용자가 동의하지 않았으면 
        // env 파일의 default 위도 경도 값을 기준으로 가져와야함.
    }
// 5. 게시물에 좋아요 누르기

// 6. 게시물에 좋아요 취소하기

// 7. 게시물 삭제하기
};

module.exports = new BoardService();
