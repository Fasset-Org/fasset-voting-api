"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: uuidv4(),
          category: "Change Making Department",
          level: "department",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Stakeholder Stewardship",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Man of Resilience",
          level: "men",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Woman of Resilience",
          level: "women",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Mentoring Champion",
          level: "specialist",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Leadership: Inspire",
          level: "executive",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Leadership Knowledge",
          level: "manager",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Employee Choice: Great Sense of Humor",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Employee Choice: Kindest",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Employee Choice: Great Communicator",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Wellness Warrior",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Rising Star HET & WBE",
          level: "intern",
          dateCreated: new Date(),
          dateUpdated: new Date()
        },
        {
          id: uuidv4(),
          category: "Organisational Values",
          level: "employee",
          dateCreated: new Date(),
          dateUpdated: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
