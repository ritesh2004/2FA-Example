const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"exampleDB"})
    .then((resp)=>{
        console.log(`Database connected at ${resp.connection.host}`);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;