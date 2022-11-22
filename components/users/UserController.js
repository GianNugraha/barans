require('dotenv').config();
const UserService = require('./UserService');

class UserController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!password) {
        throw { api: 'user', message: 'badRequest-login' };
      }
      // const data = { condition, password };
      const signRes = await UserService.login(req.body);

      // console.log(access_token, `aik`);
      res.status(200).json(signRes);
    } catch (error) {
      next(error);
    }
  }

    
}

module.exports = UserController;
