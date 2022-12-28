const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {models} = require('../db/index');


const createUser = async (email, nickname, password) => {
    const checkEmail = await models.user_profile.findOne( {where : { email : email }});
    const checkNickname = await models.user.findOne( {whrere : { nickname : nickname }});
    const hashPassword = await bcrypt.hash(password, 12);
    if (email in checkEmail) {
        return console.log("이미 사용중인 이메일입니다.");
    } else if (nickname in checkNickname) {
        return console.log("이미 사용중인 닉네임입니다.");
    }
    
    const newUser = await models
                            .user_password.create({ password: hashPassword })
                            .user_profile.create({ email: email })
                            .user.create({ nickname: nickname })

    return newUser;
    
}

const getUserToken = async (email, password) => {
    // 1.입력한 이메일을 모델 user_profile에 있는지 찾아보기
    const checkEmail = await models.user_profile.findOne( {where : { email : email }});
    //2. 이메일이 속한 로우에서 user_id 뽑고, => 어떻게??
    const getUserId = checkEmail.user_id
    // const getuserid = await models.user_profile.findOne( { where: {email : email}})
    //3. => user_id와 일치하는 비밀번호 해쉬값 찾아오기
    const getUserPassword = await models.user_password.findOne( { where: { user_id : getUserId }})
    const hashPassword = getUserPassword.password
    // const hashPassword = models.user_password.findByuserId({getUserId})
    // 해쉬화된 비밀번호랑 로그인창에서 입력된 비밀번호 비교
    const checkPassword = await bcrypt.compare(password, hashPassword);
    
    if (!email in checkEmail) {
        return console.log("이메일을 확인하세요.");
    } else if (!checkPassword) {
        return console.log("비밀번호를 확인하세요.")
    }

    // 일치하는 사용자가 출현하면 넘어가자
    const secretKey = process.env.JWT_SECRET_KEY;
    // 2개 프로퍼티를 jwt 토큰에 담음
    const token = jwt.sign({ sub: models.user.id }, secretKey);

    return  token ;

}



module.exports = {createUser, getUserToken};
