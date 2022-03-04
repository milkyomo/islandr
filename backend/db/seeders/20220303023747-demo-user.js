"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Islander",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "TomNook@user.io",
          username: "TomNook",
          hashedPassword: bcrypt.hashSync("TomNookPassword123"),
        },
        {
          email: "Isabelle@user.io",
          username: "Isabelle",
          hashedPassword: bcrypt.hashSync("IsabellePassword123"),
        },
        {
          email: "Maple@user.io",
          username: "Maple",
          hashedPassword: bcrypt.hashSync("MaplePassword123"),
        },
        {
          email: "Shino@user.io",
          username: "Shino",
          hashedPassword: bcrypt.hashSync("ShinoPassword123"),
        },
        {
          email: "Chrissy@user.io",
          username: "Chrissy",
          hashedPassword: bcrypt.hashSync("ChrissyPassword123"),
        },
        {
          email: "Francine@user.io",
          username: "Francine",
          hashedPassword: bcrypt.hashSync("FrancinePassword123"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Islander",
            "TomNook",
            "Isabelle",
            "Maple",
            "Shino",
            "Chrissy",
            "Francine",
          ],
        },
      },
      {}
    );
  },
};
