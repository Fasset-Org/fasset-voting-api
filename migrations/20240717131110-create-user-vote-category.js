"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("UserVoteCategories", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserVoteCategories");
  }
};
