"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Vote }) {
      // define association here

      this.hasMany(Vote, { foreignKey: "employeeId" });
    }
  }
  Employee.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      position: {
        type: DataTypes.TEXT
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
    },
    {
      sequelize,
      modelName: "Employee",
      timestamps: true,
      createdAt: "dateCreated",
      updatedAt: "dateUpdated"
    }
  );
  return Employee;
};
