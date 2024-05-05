const app = require("./src/app.js");
const connectDB = require("./src/database/database.js");

connectDB();

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})