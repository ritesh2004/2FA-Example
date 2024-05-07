const express = require("express");
const userRouter = require("./route/user.route.js");
const cors = require("cors")

const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    methods : ['GET','POST']
}))

app.use(express.json());

app.use("/user",userRouter);

module.exports = app;