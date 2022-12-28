const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {models} = require('../db/index');


const createUser = async () => {
    const checkEmail = await models.user_profile.findOne( {where : {email : userEmail}});
    const checkNickname = await models.user.req.body.nickname.findOne( {whrere : {nickname: req.body.nickname}});
    const hashPassword = await bcrypt.hash(req.body.password, 12);
    if (checkEmail) {
        return console.log("이미 사용중인 이메일입니다.");
    } else if (checkNickname) {
        return console.log("이미 사용중인 닉네임입니다.");
    }
    
    return models.user_password.create({ password: hashPassword }), models.user_profile.create({ email: req.body.email}), models.user.create({ nickname: req.body.nickname}) ;
    
}

const getUserToken = async () => {
    const checkEmail = await models.user_profile.findOne( {where : {email : userEmail}});
    const checkPassword = await models.user_password.findOne( {where : {password : req.body.password}});

    const findUserId = await models.user.findAll( { where: {id : userId}})
    const findUserInfo = await models.user_profile.findAll( { where: {user_id : userId}})

    if (!checkEmail) {
        return console.log("이메일을 확인하세요.");

    } else if (!checkPassword) {
        return console.log("비밀번호를 확인하세요.")
    }
    //최초 로그인 시,토큰 발급
    //기존 회원 토큰?
    return findUserId, findUserInfo //토큰 추가!?;
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



module.exports = {createUser, getUserToken, getUserData };