const UserRepository = require('./UserRepository');
const bcrypt = require('bcrypt');
const hashPassword = require('../../helpers/hashPassword');
require("dotenv").config();
const secretkey = process.env.SECRETKEY;
const jwt = require('jsonwebtoken');
class UserService {
  static async login(data) {
    try {
      let findUser;
      if (data.username) {
        findUser = await UserRepository.findUser({ username: data.username });
      } else {
        findUser = await UserRepository.findUser({ email: data.email });
      }
      if (!findUser) {
        throw { api: 'user', message: 'notFound-login' };
      }
      if (!bcrypt.compareSync(data.password, findUser.password)) {
        throw { api: 'user', message: 'forbidden-login' };
      }
   
      const datum = {
        id: findUser.id,
        username: findUser.username,
        email: findUser.email,
      }
      const access_token = jwt.sign(datum, secretkey);
      return { 
        access_token: access_token, 
        dataUser: datum

      };
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UserService;
