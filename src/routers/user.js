const express = require('express');
const userRouter = express.Router();
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!
// const { loginRequired } = require("../middlewares");
// const { userService } = require("../service");

/* POST users register. */
userRouter.post("/register", async (req, res, next) => {
    try {
      const user_id = req.body.user_id;
      const pw = req.body.pw;
      const nickname = req.body.nickname;
      const email = req.body.email;
      const introduce = req.body.introduce;
  
      //위 데이터를 유저 db에 추가하기
      const newUser = await userService.userService.addUser({
        user_id,
        pw,
        nickname,
        email,
        introduce,
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
      const user_id = req.body.user_id;
      const pw = req.body.pw;
  
      // 로그인 진행 (로그인 성공 시 jwt 토큰을 프론트에 보내 줌)
      const userToken = await userService.userService.getUserToken({ user_id, pw });
  
      // jwt 토큰을 프론트에 보냄 (jwt 토큰은, 문자열임)
      res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  }
);


/* POST users logout. */
userRouter.post('/user/logout', function(req, res, next) {
    res.send('로그아웃 라우터 설정중');
});


/* PATCH users modify. */
userRouter.patch('/user/:id', function(req, res, next) {
    res.send('회원정보수정 라우터 설정중');
});

/* GET users user search. */
userRouter.get('/user/:id', function(req, res, next) {
    res.send('회원정보조회 라우터 설정중');
});


/* DELETE users DELELE. */
userRouter.delete(
    "/delete/:id",
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