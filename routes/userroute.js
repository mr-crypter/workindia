const express = require('express');
const router = express.Router();
const {register,login} = require("../controller/usercontroller") ;




router.route("/bfhl").post(register) ;
router.route("/bfhl").get(login) ;





module.exports = router;