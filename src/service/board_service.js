// const { ?? } = require("../db");
// const { ?? } = require("../db/models");

class BoardService {
//     constructor(study_model, recruit_model, like_model, study_tag_model) {
//       this.Study = study_model;
//       this.StudyTag = study_tag_model;
//       this.Recruit = recruit_model;
//       this.Like = like_model;
//     } 
// 1. 게시물 등록
  //  async addBoard

// 2. 기본 게시물 조회 (시간 순서)
    async getBoardByTime(){
        return [{"title": "asdads"}];
    }
// 3. 게시물 조회 (좋아요 순서)
    async getBoardByLike() {

    }
// 4. 게시물 조회 (거리가 가까운 순서)
    async getBoardByDistance() {

    }
// 5. 게시물에 좋아요 누르기

// 6. 게시물에 좋아요 취소하기
// 7. 게시물 삭제하기
};

module.exports = new BoardService();
