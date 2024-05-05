const express = require("express");
const userRouter = require("./route/user.route.js");

const app = express();

app.use(express.json());

app.use("/user",userRouter);

module.exports = app;