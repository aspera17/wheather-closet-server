const express = require("express");
const userRouter = express.Router();

const {loginRequired} = require("../middlewares");

const {userService} = require("../service/index");


// 1. 회원 가입 POST users register
// @route    POST api/user/register
userRouter.post("/register", async function (req, res, next) {
    res.status(201)
}
);

// 2. 로그인 POST users login
// @route    POST api/user/login
userRouter.post("/login", async function (req, res, next) {
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

// 3. 로그아웃 POST users logout
// @route    POST api/user/logout
userRouter.post("/logout", async function (req, res, next) {
    console.log("LogOut")

    res.end();
}
);


// 4. 내 정보 조회(GET)
// @route    GET api/user/profile/:userId
userRouter.get("/profile",  /*loginRequired*/ async function (req, res, next) {
    try {
        const email = req.email;
        // const currentUserInfo = await userService.getUserData(email);
        const currentUserInfo = await userService.getUserData(email)
        res.json(currentUserInfo);
        // res.status(200).json(currentUserInfo);
    } catch (error) {
        next(error);
    }
});


// 5. 내 정보 수정 PATCH users modify
// @route    PATCH api/user/profile/:userId
userRouter.patch("/profile", loginRequired, async function (req, res, next) {
     res.status(200)
});



// 6. 내가 '좋아요'누른 게시물 보기
// @route    GET api/user/board/likes/:userId
userRouter.get("posts/likes",  loginRequired, async function (req, res, next) {
    try {
        const getLikesPostssData = await userService.getLikesPostssData();
        res.json(getLikesPostssData);
        //   res.status(200).json(getLikesPostssData);

    } catch (err) {
        res.status(500).send("Server Error");
    }
}
);



// 7. 내가 등록한 게시물 보기
// @route    GET api/user/posts/:userId
userRouter.get("/posts", loginRequired, async function (req, res) {
    try {
        const userId = req.userId;
        const getPostsData = await userService.getPostsData(userId);
        res.json(getPostsData);
        //   res.status(200).json(getPostsData);
    } catch (err) {
        res.status(500).send("Server Error");
    }
}
);


// 8. 회원 탈퇴 DELETE users DELELE
// @route    DELETE api/user/:userId
userRouter.delete("/",loginRequired, async function (req, res, next) {
      try {
        res.status(200);
      } catch (err) {
        next(err);
      }
    }
);


module.exports = userRouter;