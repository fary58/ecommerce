const router = require('express').Router()
const userCtrl = require("../controllers/userController");


router.post("/register", userCtrl.register)
// router.get("/", userCtrl.get)



module.exports = router;
