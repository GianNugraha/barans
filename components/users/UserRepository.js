const { User } = require("../../models");
const { Op, QueryTypes } = require("sequelize");

class UserRepository {
  static async findUser(condition) {
    try {
      return await User.findOne({
        where: condition,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
