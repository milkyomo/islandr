"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.islandr;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options,
      [
        //1
        {
          email: "demo@user.io",
          username: "Islander",
          hashedPassword: bcrypt.hashSync("password"),
        },
        //2
        {
          email: "TomNook@user.io",
          username: "TomNook",
          hashedPassword: bcrypt.hashSync("TomNookPassword123"),
        },
        //3
        {
          email: "Isabelle@user.io",
          username: "Isabelle",
          hashedPassword: bcrypt.hashSync("IsabellePassword123"),
        },
        //4
        {
          email: "Maple@user.io",
          username: "Maple",
          hashedPassword: bcrypt.hashSync("MaplePassword123"),
        },
        //5
        {
          email: "Shino@user.io",
          username: "Shino",
          hashedPassword: bcrypt.hashSync("ShinoPassword123"),
        },
        //6
        {
          email: "Chrissy@user.io",
          username: "Chrissy",
          hashedPassword: bcrypt.hashSync("ChrissyPassword123"),
        },
        //7
        {
          email: "Francine@user.io",
          username: "Francine",
          hashedPassword: bcrypt.hashSync("FrancinePassword123"),
        },
        //8 x
        {
          email: "crystal.faiiry@user.io",
          username: "Dani",
          hashedPassword: bcrypt.hashSync("CrystalPassword123"),
        },
        //9 x
        {
          email: "lenacrossing@user.io",
          username: "Lena",
          hashedPassword: bcrypt.hashSync("LenaPassword123"),
        },
        //10 x
        {
          email: "lily_acnh_@user.io",
          username: "Maya",
          hashedPassword: bcrypt.hashSync("LenaPassword123"),
        },
        //11 x
        {
          email: "liyah.crossing@user.io",
          username: "Liyah",
          hashedPassword: bcrypt.hashSync("LenaPassword123"),
        },
        //12
        {
          email: "life.onluna@user.io",
          username: "Anna",
          hashedPassword: bcrypt.hashSync("LenaPassword123"),
        },
        //13 x
        {
          email: "sage.shenanigans@user.io",
          username: "Liz",
          hashedPassword: bcrypt.hashSync("LenaPassword123"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options,
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
