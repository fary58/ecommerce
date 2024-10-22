const router = require("express").Router();
const userCtrl = require("../controllers/userController");

router.post("/register", userCtrl.register);
router.get("/refresh_token", userCtrl.refreshtoken);

module.exports = router;
