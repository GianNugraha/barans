const ArticleRepository = require('./ArticleRepository');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const {
    Sequelize,
    sequelize
  } = require('../../models');
  const Op = Sequelize.Op;
class ArticleService {
  static async addArticle(inputValues) {
    try {
      const data = {
        id: uuidv4(),
        ...inputValues,
        companyLogo:inputValues.fileUrl,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
     
      const Articles = await ArticleRepository.addArticle(data);
      return Articles;
    } catch (error) {
      throw error;
    }
  }

  static async getAllArticle(offset, limit, search) {
    const whr = {}
    if (search.description !== ''  && search.description !== undefined ){
        whr[Op.and] = [{description:{[Op.iLike]: `%${search.description}%`}}]
    }
    if ( search.location != ''  && search.location != undefined){
        whr[Op.and] = [{location:{[Op.iLike]: `%${search.location}%`}}]
    }
    if ( search.full_time != '' && search.full_time != undefined){
        whr.type = search.full_time === 'true' ? 'Full Time' : null
    }
    return ArticleRepository.getAllArticle(offset, limit, whr);
  }

  static async getArticleById(id){
    return ArticleRepository.getArticleById(id);
  }

}

module.exports = ArticleService;
