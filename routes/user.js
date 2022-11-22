const express = require("express");
const UserController = require("../components/users/UserController");
const router = express.Router();

router.post("/", UserController.login);

module.exports = router;
