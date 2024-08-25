const express = require("express") ;
const app = express() ;
app.use(express.json()) ;
const cookieParser = require('cookie-parser')
app.use(express.urlencoded({extended:true})) ;
const cors = require('cors');
app.use(cors("*"));


app.use(cookieParser());


const userroute = require("./routes/userroute") ;


app.use("",userroute) ;



module.exports = app ;