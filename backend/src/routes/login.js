const router = require("express").Router();
const { login } = require("../controlls/login");

router.post("/", login);

module.exports = router;
