const router = require("express").Router();
const userControll = require("../controlls/user");
const auth = require("../middelewares/auth");

router.post("/", userControll.addUser);
router.patch("/", [auth], userControll.updateUser);
module.exports = router;
