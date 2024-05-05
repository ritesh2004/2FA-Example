const {Router} = require("express");
const {createAccount,login, setUp2FA, verify2FA} = require("../controller/user.controller.js");

const userRouter = Router();

userRouter.post("/signup",createAccount);

userRouter.post("/signin",login);

userRouter.post("/setup-2fa",setUp2FA);

userRouter.post("/verify-2fa",verify2FA);

module.exports = userRouter;