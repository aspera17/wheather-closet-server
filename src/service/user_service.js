const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {models} = require('../db/index');


const createUser = async (email, nickname, password) => {
    const userProfile = await models.user_profile.findOne({where: {'email': email}});
    if (userProfile) {
        return Error("이미 사용중인 이메일입니다.");
    }
    const checkNickname = await models.user.findOne({where: { 'nickname' : nickname}});
    if (checkNickname) {
        return Error("이미 사용중인 닉네임입니다.");
    }
    
    const user = await models.user.create({nickname: nickname});
    const hashPassword = await bcrypt.hash(password, 12);

    await models.user_password.create({password: hashPassword, user_id: user.id});
    await models.user_profile.create({email: email, user_id: user.id});

    return ;
}

//login,sign 할 껀데!!? 왜 getUserToken
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

    if (!checkEmail) {
        return console.log("이메일을 확인하세요.");
    }

    // jwt가 리프레쉬토큰을 만들자!(리프레쉬~매번 생성한다.)
    const secretKey = process.env.JWT_SECRET_KEY;
    // 2개 프로퍼티를 jwt 토큰에 담음
    const token = jwt.sign({ sub: getUserId }, secretKey);
    // const intToken = token.replace(/\"/gi, "");
    // replaceAll("\"", "")
    // const userToken = await models.user_token.create({refresh_token: intToken, user_id: getUserId});

    return  token ;

}

const getUserData =  async (userId) => {
    // TODO: 이메일(user_profile > email), 닉네임(user > nickname)
    const user = await models.user.findOne({where: {id: userId}})
    const userProfile = await models.user_profile.findOne({where: {user_id: userId}})

    userNickName = user.nickname;
    userEmail = userProfile.email
    // 테이블에서 정보를 하나씩 가져와서 하나의 {} 안에 넣어서 보여준다..? => 여기서 조인해야 하나?
    return { userNickName, userEmail };
}

const updateUserInfo = async(userId, newNickName, newPassword) => {
    //TODO: 이메일조회(user_profile > email), 닉네임변경(uesr > nickname), 패스워드변경(user_password>password)
    const userProfile = await models.user_profile.findOne({where: {user_id: userId}})
    // const user = await models.user.findOne({where: {id: userId}})
    // const userPassword = await models.user_password.findOne( { where: { user_id : userId }})
    const userEmail = userProfile.email;
    // const userNickName = user.nickname;
    //const hashPassword = userPassword.password;

    const checkNickname = await models.user.findOne({where: { 'nickname' : newNickName }});
    if (checkNickname) {
        return Error("이미 사용중인 닉네임입니다.");
    }
    const updateNickName = await models.user.update({'nickname': newNickName }, {where: {id: userId}})

    const hashPassword = await bcrypt.hash(newPassword, 12);
    const updatePassword = await models.user_password.update({'password': hashPassword}, {where: {user_id: userId}})

    return {userEmail};
}

const userLogout = async(userId) => {
    //TODO : userId로 jwt토큰 찾기 => 토큰 찾으면 지우고 반환
    //  이러면 로그인 할 때마다 토큰 테이블에 토큰 담아줘야 하는 거 아닌가?
    const logout = await models.user_token.destroy({
      where: {
        user_id: userId
      }
    });
    
    return logout;
   
}

const delUser = async(userId) => {
    //TODO: userId로...다 삭제!(user, user_profile, user_password, user_token)
    // 작성한 게시글 삭제도 구현해야 하나..? => 안 해
    // Truncate the table(완전삭제) { truncate: true } =>  테이블까지 지우니까 NO
    const deleteUserProfile = await models.user_profile.destroy({ where: {user_id: userId } });
    const deleteUserPassword = await models.user_password.destroy({ where: {user_id: userId } });
    const deleteUserToken = await models.user_token.destroy({ where: {user_id: userId } });
    const deleteUser = await models.user.destroy({ where: {id: userId } });

    return deleteUser ;
}



module.exports = {createUser, getUserToken, getUserData, updateUserInfo, userLogout, delUser};
