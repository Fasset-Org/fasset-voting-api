"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Employees", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      position: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false
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
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("Employees");
  }
};
