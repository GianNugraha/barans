const express = require("express");
const router = express.Router();
const errorHandlers = require("../middlewares/errorHandlers");
const articleRoutes = require("./articles");
const userRoutes = require("./user");


router.use("/api/login", userRoutes);
// router.use('/register', userRoutes);
router.use("/api/articles", articleRoutes);

router.use(errorHandlers);

module.exports = router;