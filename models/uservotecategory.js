"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserVoteCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  UserVoteCategory.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userVotingEmail: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.UUID
      },
      dateCreated: {
        allowNull: false,
        type: DataTypes.DATE
      },
      dateUpdated: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "UserVoteCategory",
      timestamps: true,
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  );
  return UserVoteCategory;
};
