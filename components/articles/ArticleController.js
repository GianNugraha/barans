const ArticleService = require('./ArticleService');

class ArticleController {
  static async addNewArticles(req, res, next) {
    try {
      const Article = await ArticleService.addArticle(req.body);
      res.status(201).json(Article);
    } catch (e) {
      next(e);
    }
  }

  static async getArticleById(req, res, next) {
    try {
      const { id } = req.params;
      const Article = await ArticleService.getArticleById(id)
      res.status(200).json(Article);
    } catch (e) {
      next(e);
    }
  }

  static async getArticle(req, res, next) {
      try {
        let limit = null, offset = null;
        const { page } = req.query;
        if (page){
        limit = +req.params.limit || 4;
        offset = (+page - 1) * limit;
        }
        // if (description || location || full_time){

        // }
        const Article = await ArticleService.getAllArticle(offset, limit, req.query)
        res.status(200).json(Article);
      } catch (e) {
        next(e);
      }
  }
}

module.exports = ArticleController;
