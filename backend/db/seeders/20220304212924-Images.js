"use strict";

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
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 5,
          imageUrl:
            "https://pbs.twimg.com/media/FNCY3uBVIAAniG2?format=jpg&name=large",
          content:
            "Reading a book and enjoying some tea in my happy place. Care to join me?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          imageUrl:
            "https://pbs.twimg.com/media/FNCY3tuVkAUVhGU?format=jpg&name=large",
          content: "I want to read a book under the stars here!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          imageUrl:
            "https://pbs.twimg.com/media/FNCY3uSVQAED6EB?format=jpg&name=large",
          content: "Bruce sleeping along a natural path",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          imageUrl:
            "https://pbs.twimg.com/media/FNCY3uCUYAAwIoS?format=jpg&name=large",
          content: "This is such a pretty Ables Sister design!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          imageUrl:
            "https://pbs.twimg.com/media/EYwSISTXkAI7-VE?format=jpg&name=large",
          content:
            "Yes, yes. Nice Nook's Cranny design by Paige on Twitter @oddcrossings.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          imageUrl:
            "https://pbs.twimg.com/media/FEUnxuAX0AM5Pip?format=jpg&name=large",
          content:
            "Look at this amazing home that emma designed for me! You can find her on Twitter @sunmizzz",
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
    return queryInterface.bulkDelete("Images", null, {});
  },
};
