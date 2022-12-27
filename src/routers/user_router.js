// 1. 회원 가입
// 2. 로그인
// 3. 로그아웃
// 4. 내 정보 조회
// 5. 내 정보 수정
// 6. 내가 '좋아요'누른 게시물 보기
// 7. 내가 등록한 게시물 보기
// 8. 회원 탈퇴  

const express = require('express');
const userRouter = express.Router();
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!

const { loginRequired } = require("../middlewares");
const { userService } = require("../service");


/* POST users register. */
userRouter.post("/register", async (req, res, next) => {
    try {

      const email = req.body.email;
      const password = req.body.password;
      const nickname = req.body.nickname;
  
      //위 데이터를 유저 db에 추가하기
      const newUser = await userService.userService.addUser({
        nickname,
        email,
        password,

      });
  
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);


/* POST users login. */
userRouter.post("/login", async (req, res, next) => {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
  
      // req (request) 에서 데이터 가져오기
      const email = req.body.email;
      const password = req.body.password;
  
      // 로그인 진행 (로그인 성공 시 jwt 토큰을 프론트에 보내 줌)
      const userToken = await userService.userService.getUserToken({ email, password });
  
      // jwt 토큰을 프론트에 보냄 (jwt 토큰은, 문자열임)
      res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  }
);


/* POST users logout. */
userRouter.post('/logout', function(req, res, next) {
    console.log("LogOut")
      req.session.destory(err => {
        if(err) console.log(err)
      })
    res.end();
});


/* PATCH users modify. */
//수정해야됨!!!!!!
// 회원 정보 수정
// (예를 들어 /api/users/abc12345 로 요청하면 req.params.userId는 'abc12345' 문자열로 됨)
userRouter.patch("/", loginRequired, async (req, res, next) => {
  try {
    const id = req.userId;

    //사용자 정보를 업데이트함.
    const updatedUserInfo = await userService.setUser(
      /*userInfoRequired,*/
      req.body,id
    );

    // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
});


/* GET users user search. */
userRouter.get("/", loginRequired, async function (req, res, next) {
  try {
    const email = req.email;
    const currentUserInfo = await userService.getUserData(email);
    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});


/* DELETE users DELELE. */
userRouter.delete(
    "/:id",
    /*loginRequired,*/
    async function (req, res, next) {
      try {
        // params로부터 id를 가져옴
        const id = req.params._id;
  
        const deleteResult = await userService.userService.deleteUserData(id);
  
        res.status(200).json(deleteResult);
      } catch (error) {
        next(error);
      }
    }
);
  

module.exports = userRouter;