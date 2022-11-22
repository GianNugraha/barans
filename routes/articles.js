const express = require("express");
const ArticleController = require("../components/articles/ArticleController");
const Auth = require("../middlewares/Auth");
const { authentication, authorization } = Auth;
const uploadFileImagekit = require("../middlewares/uploadFileImagekit");
const multer = require("multer");
const upload = multer();
const router = express.Router();

router.post(
  "/",
  [authentication, authorization, upload.single("file"), uploadFileImagekit],
  ArticleController.addNewArticles
);

router.get(
  "/recruitment/position/:id",
  [authentication,authorization],
  ArticleController.getArticleById
);

router.get(
  "/recruitment/position",
  [authentication],
  ArticleController.getArticle
);

// router.patch(
//   "/:id",
//   [authentication, authorization],
//   ArticleController.patchData
// );

// router.put(
//   "/:id",
//   [authentication, authorization],
//   ArticleController.updateArticle
// );

// router.delete(
//   "/:id",
//   [authentication, authorization],
//   ArticleController.deleteArticle
// );


module.exports = router;
