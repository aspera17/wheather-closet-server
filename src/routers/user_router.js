const express = require("express");
const userRouter = express.Router();

const {loginRequired} = require("../middlewares");

const {userService} = require("../service/index");
const { getUserToken } = require("../service/user_service");


// @route    POST api/user/register
userRouter.post("/register", async function (req, res, next) {
    try {
        const user = await createUser()

        res.json(user);

    } catch (error) {
        next(error);
    }

}
);

// @route    POST api/user/login
userRouter.post("/login", async function (req, res, next) {
    try {
      
      const userToken = await getUserToken();

      res.status.json(userToken);
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