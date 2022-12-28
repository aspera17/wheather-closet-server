const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {models} = require('../db/index');


const createUser = async (email, nickname, password) => {
    const checkEmail = await models.user_profile.findOne( {where : {email : req.body.email}});
    const checkNickname = await models.user.findOne( {whrere : {nickname: req.body.nickname}});
    const hashPassword = await bcrypt.hash(password, 12);
    if (email in checkEmail) {
        return console.log("이미 사용중인 이메일입니다.");
    } else if (nickname in checkNickname) {
        return console.log("이미 사용중인 닉네임입니다.");
    }
    
    const newUser = await models
                            .user_password.create({ password: hashPassword })
                            .user_profile.create({ email: req.body.email})
                            .user.create({ nickname: req.body.nickname})

    return newUser;
    
}

const getUserToken = async (email, password) => {
    const checkEmail = await models.user_profile.findById({email});
    // const checkEmail = await models.user_profile.findOne( {where : {email : req.body.email}});
    const checkPassword = await models.user_password.findById({password});
    // const checkPassword = await models.user_password.findOne( {where : {password : req.body.password}});

    if (!checkEmail) {
        return console.log("이메일을 확인하세요.");

    } else if (!checkPassword) {
        return console.log("비밀번호를 확인하세요.")
    }


    // 최초 로그인 jwt토큰 발급
    
    // jwt토큰 발급 받은 사용자?                              
    const userToken = await jwt(accessToken, key);

    return userToken;
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