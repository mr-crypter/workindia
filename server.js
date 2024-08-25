const app = require("./app") ;
const dotenv = require("dotenv") ;
dotenv.config({path: "config/config.env"})








app.listen(3000,()=>{
    console.log("Server is running on port 3000") ;
})