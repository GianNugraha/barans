'use strict';
const moment = require("moment");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    company: DataTypes.STRING,
    companyUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    howToApply: DataTypes.TEXT,
    companyLogo: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      get: function () {
        return this.getDataValue("createdAt") != null
          ? moment(this.getDataValue("createdAt")).format(
              "YYYY-MM-DD HH:mm:ss"
            )
          : null;
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get: function () {
        return this.getDataValue("updatedAt") != null
          ? moment(this.getDataValue("updatedAt")).format(
              "YYYY-MM-DD HH:mm:ss"
            )
          : null;
      },
    },
  }, {
    sequelize,
    modelName: 'Article',
    tableName: "articles",
    underscored: true,
    timestamps: false,
  });
  return Article;
};