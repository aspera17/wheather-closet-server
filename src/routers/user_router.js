const express = require("express");
const userRouter = express.Router();

const {loginRequired} = require("../middlewares");

const {userService} = require("../service/index");
const { createUser, getUserToken, getUserData, updateUserInfo, userLogout, delUser } = require("../service/user_service");


// @route    POST api/user/register
userRouter.post("/register", async function (req, res, next) {
    try {

        const email = req.body.email;
        const nickname = req.body.nickname;
        const password = req.body.password;
        
        const user = await createUser(email, nickname, password)

        res.status(201).json(user);

    } catch (error) {
        next(error);
    }
}
);


// @route    POST api/user/login
userRouter.post("/login", async function (req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      
      const token = await getUserToken(email, password);

      res.status(200).json(token);

    } catch (error) {
      next(error);
    }
  }
);



// @route  POST api/user/logout
userRouter.post("/logout", loginRequired, async function(req, res, next) {
  try {
    const userId = req.userId;
    const logout = await userLogout(userId)
    res.status(200).send({"logout" : logout});
  } catch (error) {
    next(error);
  }
});


// @route    GET api/user/profile/:userId
userRouter.get("/profile",  loginRequired, async function (req, res, next) {
    try {

        const userId = req.userId;
        // const currentUserInfo = await userService.getUserData(email);
        const currentUserInfo = await getUserData(userId)
        res.status(200).json({ "profile" : currentUserInfo});
    } catch (error) {
        next(error);
    }
});


// @route    PATCH api/user/profile/:userId
userRouter.patch("/profile", loginRequired, async function (req, res, next) {
    try{

      const userId = req.userId;
      const newNickName = req.body.nickname;
      const newPassword = req.body.password;
      const user = await updateUserInfo(userId, newNickName, newPassword);
      res.status(200).json(user)

    } catch (error) {
      next(error);
    }
});



// 6. 회원 탈퇴 DELETE users DELELE
// @route    DELETE api/user/:userId
userRouter.delete("/",loginRequired, async function (req, res, next) {
      try {
        const userId = req.userId;
        const user = await delUser(userId);
        res.status(201).send({"delete" : user });
      } catch (err) {
        next(err);
      }
    }
);


module.exports = userRouter;