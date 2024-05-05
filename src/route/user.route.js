const {Router} = require("express");
const {createAccount,login} = require("../controller/user.controller.js");

const userRouter = Router();

userRouter.post("/signup",createAccount);

userRouter.post("/signin",login);

module.exports = userRouter;