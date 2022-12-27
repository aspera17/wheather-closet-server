const express = require("express");
const {loginRequired} = require("../middlewares/login-required");
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴 => 서비스로직, 미들웨어 작성 시 참고하기!
const userRouter = express.Router();
const {userService} = require("../service");


// 1. 회원 가입
/* POST users register. */
// userRouter.post("/register", async (req, res, next) => {
//     try {

//       const email = req.body.email;
//       const password = req.body.password;
//       const nickname = req.body.nickname;

//       //위 데이터를 유저 db에 추가하기
//       const newUser = await userService.userService.addUser({
//         nickname,
//         email,
//         password,

//       });

//       res.status(201).json(newUser);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// 2. 로그인
/* POST users login. */
userRouter.post("/login", async (req, res, next) => {
    try {

      const email = req.body.email;
      const password = req.body.password;

      // TODO: 이메일 유저 확인 후 토큰 발급

      // jwt 토큰을 프론트에 보냄 (jwt 토큰은, 문자열임)
      res.status(200).json(userToken);
    } catch (error) {
      next(error);
    }
  }
);

// 3. 로그아웃
/* POST users logout. */
// userRouter.post('/logout', function(req, res, next) {
//     console.log("LogOut")
//       req.session.destory(err => {
//         if(err) console.log(err)
//       })
//     res.end();
// });

// userRouter.get('/logout', (req, res, next) => {
//     req.logout();
//     res.redirect('/');
// });



// 4. 내 정보 수정
/* PATCH users modify. */
userRouter.patch("/profile", loginRequired, async (req, res, next) => res.status(200));

//수정해야됨!!!!!!
// 회원 정보 수정
// (예를 들어 /api/users/abc12345 로 요청하면 req.params.userId는 'abc12345' 문자열로 됨)
// userRouter.patch("/", loginRequired, async (req, res, next) => {
//   try {
//     const id = req.userId;

//     //사용자 정보를 업데이트함.
//     const updatedUserInfo = await userService.setUser(
//       /*userInfoRequired,*/
//       req.body,id
//     );

//     // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
//     res.status(200).json(updatedUserInfo);
//   } catch (error) {
//     next(error);
//   }
// });


//1번 유저 jwt: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSJ9.7be_0ewi7-LdtsNA2au5MUTzH2PZ6c0k4BchwB0_HYo


// 5. 내 정보 조회(GET)
// 아이디가 이메일이니까... email로 조회해야 하나? => No,jwt가 만드는? userId!?
// @route    GET api/profile/:userId
userRouter.get("/profile",  loginRequired, async function (req, res, next) {
    try {
        const userId = req.userId;
        const currentUserInfo = await userService.getUserData(userId)
        res.json(currentUserInfo);
        // res.status(200).json(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

// 6. 내가 등록한 게시물 보기
// @route    GET api/user/posts/:userId
userRouter.get("/posts", loginRequired, async (req, res) => {
    try {
        const userId = req.userId;
        const userPostsData = await userService.getPostsData(userId);
        res.json(userPostsData);
        // res.status(200).json(getPostsData);
    } catch (err) {
        next(error);
        // res.status(500).send("Server Error");
    }
});


// 7. 내가 '좋아요'누른 게시물 보기
// @route    GET api/likes/:userId
// => @route    GET api/posts/likes/:userId 이 구조가 맞지 않나..?
userRouter.get("/posts/likes",  loginRequired, async (req, res) => {
    try {
        const userLikesPostssData = await userService.getLikesPostssData();
        res.json(userLikesPostssData);
        // res.status(200).json(getLikesPostssData);

    } catch (err) {
        next(error);
        // res.status(500).send("Server Error");
    }
});



// 8. 회원 탈퇴 
/* DELETE users DELELE. */
// userRouter.delete(
//     "/:id",
//     /*loginRequired,*/
//     async function (req, res, next) {
//       try {
//         // params로부터 id를 가져옴
//         const id = req.params._id;

//         const deleteResult = await userService.userService.deleteUserData(id);

//         res.status(200).json(deleteResult);
//       } catch (error) {
//         next(error);
//       }
//     }
// );


/*
const statusCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  DB_ERROR: 600,
}; */


module.exports = userRouter;