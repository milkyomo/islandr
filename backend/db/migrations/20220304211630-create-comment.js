"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.islandr;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Images" },
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments", options);
  },
};
