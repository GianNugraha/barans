const {
  Article,
  TechnicalFileCategory,
  WorkAllocationType,
} = require("../../models");
const moment = require("moment");

class ArticleRepository {
  static async addArticle(inputValues) {
    try {
      return await Article.create(inputValues);
    } catch (error) {
      throw error;
    }
  }

  static async getArticleById(whr) {
    try {
      const data = await Article.findOne({
        where: { id: whr },
      });
      if (data == null) throw new Error("Article Not Found !");
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllArticle(offset, limit, whr) {
    try {
      const data = await Article.findAll({
        order: [["created_at", "DESC"]],
        where: whr,
        offset: offset,
        limit: limit,
      });
      data.limit = limit;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArticleRepository;
