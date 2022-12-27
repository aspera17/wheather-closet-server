const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

class UserService {
    // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨

    // constructor(user_model,  ) {
    //   this.User = user_model;
    //   // this.StudyTah = study_tag_model;
    // }

    // 회원가입
    // async addUser(userInfo) {
    //   const { email, password, nickname } = userInfo;
    //   const emailResult = await this.User.findOne({
    //     where: { email },
    //   });
    //   //중복확인
    //   if (emailResult) {
    //     throw new Error('중복된 이메일입니다.');
    //   }

    //   const nicknameResult = await this.User.findOne({
    //     where: { nickname },
    //   });
    //   if (nicknameResult) {
    //     throw new Error('중복된 닉네임입니다.');
    //   }


    //   // 우선 비밀번호 해쉬화(암호화)
    //   const hashedPassword = await bcrypt.hash(password, 10);

    //   const newUserInfo = { password: hashedPassword, nickname, email };

    //   // db에 저장
    //   const createdNewUser = await this.User.create(newUserInfo);

    //   return createdNewUser;
    // }


    // // 로그인
    // async getUserToken(loginInfo) {
    //   // 객체 destructuring
    //   const { email, password } = loginInfo;

    // //   //아이디가  db에 존재하는지 확인
    // //   //const findByUserId = await User.findOne({ _id: userId });
    //   const users = await this.User.findOne({
    //     where: { email },
    //   });
    //   if (!users) {
    //     throw new Error(
    //       "가입되지 않은 이메일 입니다."
    //     );
    //   }

    //비밀번호 일치 여부 확인
    //   const correctPasswordHash = users.password; // db에 저장되어 있는 암호화된 비밀번호
    // //매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있던 암호화된 비밀번호)
    //   const isPasswordCorrect = await bcrypt.compare(
    //     password,
    //     correctPasswordHash
    //   );

    //   if (!isPasswordCorrect) {
    //     throw new Error(
    //       "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
    //     );
    //   }

    //   // 로그인 성공 -> JWT 웹 토큰 생성
    //   const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    //   console.log(users.dataValues.email, secretKey)
    // // //   // 2개 프로퍼티를 jwt 토큰에 담음
    // //   const token = jwt.sign({ userId: users.dataValues.id }, secretKey);

    // //   //const isAdmin = user.role === "admin";

    //   return { token };
    // }


    /* 4. 내 정보 조회(GET) = 특정 사용자 정보 조회 */
    async getUserData(email) {
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

    // async getUserData(email) {
    //   const getUserinfo = await this.User_profile.findOne({
    //     where: { email },
    //     //  include: {
    //     //   model: this.Tag,
    //     // },
    //   });
    //   // db에서 찾지 못한 경우, 에러 메시지 반환
    //   if (!getUserinfo) {
    //     throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    //   }

    //   return getUserinfo;
    // }
    // async getUserData(){
    //   return [{"title": "왜 안 돼?"}];
    // }

    //6. 내가 좋아요한 게시글 보기
    async getLikesPostsData() {
        const likesposts = await this.Board_like.findOne({user_id});


        // if (!getPostsData) {
        //   throw new Error("게시글이 없습니다. 다시 한 번 확인해 주세요.");
        // }
        return likesposts;
    }

    //7. 내가 등록한 게시글 보기
    async getPostsData() {
        const posts = await this.Board.findOne({user_id});


        // if (!getPostsData) {
        //   throw new Error("게시글이 없습니다. 다시 한 번 확인해 주세요.");
        // }
        return posts;
    }


    // //사용자 목록을 받음.
    // async getUsers() {
    //   const users = await this.User.findAll();
    //   return users;
    //}


    // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
//   async setUser(/*userInfoRequired,*/ data, userId) {
//     // 객체 destructuring
//     try {
//      //const { id, /*currentPassword*/ } = userInfoRequired;


//       const user = await this.User.update({ 
//         // 첫 번째 인수: 수정할 내용
//   ...data,
// }, {
//   where: { id: userId }, 
// });

//       return user;
//     } catch (err) {
//       console.log("err", err);
//     }
//   }


    //특정 유저 삭제
    // async deleteUserData(id) {
    //   const deletedCount = await this.User.destroy({
    //     where: {
    //       id: String(id),
    //     },
    //   });

    //   // 삭제에 실패한 경우, 에러 메시지 반환
    //   if (deletedCount === 0) {
    //     throw new Error(`${id} 사용자 데이터의 삭제에 실패하였습니다.`);
    //   }
    //   return { result: "success" };
    // }
}


