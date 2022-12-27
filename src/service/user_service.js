const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {models} = require('../db/index');

const userService = [addUser,getUserToken,getUserData, getLikesPostsData, getPostsData]

// 1. 회원 가입 POST users register
const addUser = () => {
    return models.user_id;
}


// 2. 로그인 POST users login
const getUserToken = () => {
    return models.user_id ;
}

// 3. 로그아웃 POST users logout


// 4. 내 정보 조회(GET)
const getUserData = async (email) => {
    const getUserinfo = await this.User_profile.findAll({
        attributes: ['email', 'image_id', 'user_id'],
        /* where: {
          married: true, // married = 1
          age: { [Op.gt]: 30 }, // age > 30;
      }, */
    })
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!getUserinfo) {
        throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }

    return getUserinfo;
}

// 5. 내 정보 수정 PATCH users modify

// 6. 내가 '좋아요'누른 게시물 보기
const getLikesPostsData = async () => {
    const likesposts = await this.Board_like.findOne({user_id});


    // if (!getPostsData) {
    //   throw new Error("게시글이 없습니다. 다시 한 번 확인해 주세요.");
    // }
    return likesposts;
}

// 7. 내가 등록한 게시물 보기
const getPostsData = async () => {
    const posts = await this.Board.findOne({user_id});


    // if (!getPostsData) {
    //   throw new Error("게시글이 없습니다. 다시 한 번 확인해 주세요.");
    // }
    return posts;
}

module.exports = {userService};