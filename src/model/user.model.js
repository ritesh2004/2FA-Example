const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : [true,"username must be unique"],
        required : true
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model("User",userSchema);