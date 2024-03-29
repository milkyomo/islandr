"use strict";

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.islandr;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    options.tableName = "Comments";
    return queryInterface.bulkInsert(options,
      [
        {
          userId: 4,
          imageId: 1,
          comment:
            "Wow! I would love to join you, Shino. Actually, I want a place like this for myself! Time to visit Paradise Planning..",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          imageId: 1,
          comment: "I'll join you! Let's have a girls' night!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageId: 1,
          comment: "This looks so relaxing..",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageId: 4,
          comment: "Hmm.. let's implement this on our own island. Yes, yes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          imageId: 6,
          comment: "This is quite nice. I love it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageId: 5,
          comment: "Look at Abels Sister in the back! So cute!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageId: 8,
          comment: "OMG I want to visit!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    options.tableName = "Comments";
    return queryInterface.bulkDelete(options, null, {});
  },
};
