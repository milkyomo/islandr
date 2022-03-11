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
        {
          userId: 1,
          imageUrl:
            "https://media.distractify.com/brand-img/d_gDZYPEl/0x0/acnh-fireworks-1596579566623.jpeg",
          content: "I wanna do this on my own island",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy.jpg",
          content:
            "Celeste's home, perfect for stargazing☆  ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy1.jpg",
          content: "Katie's home with a little farm♡  ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy2.jpg",
          content: "Care for some pancakes?  ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy3.jpg",
          content: "Étoile's sanctuary :)  ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy6.jpg",
          content: "A peek into Celeste's room :) ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(1).jpeg",
          content:
            "butterflies around the sunken woodlands *:.  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(1).jpg",
          content: "spiral fae walkway 🌿  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(2).jpg",
          content: "a mini christmas build🤍🎄  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(3).jpg",
          content: "overgrown meadows  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(6).jpg",
          content: "picnic along the woods  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(1).jpg",
          content:
            "Maddie's new interior 🌷 sEh wants to be a model and loves make up, so I made a little corner for her to enjoy that.  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(10).jpg",
          content:
            "Shep has a new interior 🍃 He loves to write and to cook, so I made him a cozy room where he can do that.  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(11).jpg",
          content: "I hope you have a good day!  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(12).jpg",
          content: "picnic by the stone circle♡  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(15).jpg",
          content:
            "it wouldn't be me if there was no library on the beach :)  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(2).jpg",
          content:
            "A before and after photo for a farm! Stitches is really happy about it, beacuse we can cook a lot of new things now :)  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(3).jpg",
          content: "a spring path  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(4).jpg",
          content: "little picnic area 💚  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy4.jpg",
          content: "Maple and her friends <3 ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/crystalfairy5.jpg",
          content: "A cute bakery♡  ig: @crystal.faiiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(5).jpg",
          content:
            "While I am building, my villagers are resting on the island. 💛  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(6).jpg",
          content: "stroll along the river  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(7).jpg",
          content: "Love my museum entrance 🍃  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(8).jpg",
          content: "Able Sisters path :) ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(9).jpg",
          content: "Look at the view :)  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(1).jpg",
          content: "A little blue kitchen 💙  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(14).jpg",
          content: "A place to relax 🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(15).jpg",
          content: "A shared bedroom 🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(16).jpg",
          content: "An overgrown road 🌾  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(2).jpg",
          content:
            "Chrissy and Francine's ice cream shop 🍦  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini8.png",
          content:
            "I have lots of childhood memories of stopping at dumpy little Dairy Queens and gas stations in the middle of nowhere on road trips 😌  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(3).jpg",
          content:
            "An abandoned train station by Coco's house 💚  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(11).jpg",
          content: "A little outdoor cafe☕  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(12).jpg",
          content: "Maple is ready for a sleepover 🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(13).jpg",
          content: "Soccer time ⚽  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(7).jpg",
          content:
            "The biggest project on my island so far 😍 I really love how this turned out 😊  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(9).jpg",
          content: "Lunas vineyard 🍇  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(5).jpg",
          content: "maple's lavender field .:* *.  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(4).jpg",
          content: "A retreat by the pond🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(8).jpg",
          content: "An overgrown retreat🌾  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(9).jpg",
          content: "A tiny apartment🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini9.png",
          content: "Grand Canyon :)  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl: "https://islandracnh.s3.us-west-1.amazonaws.com/remini.png",
          content: "welcome to route 66☀  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini10.png",
          content:
            "Siri, which KK Slider song sounds the most like 'life is a highway?'  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini1.png",
          content: "Grand canyon😊  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini11.png",
          content:
            "A farmer's market somewhere off route 66 in California, right across from the farm where it's all grown and made💚  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(13).jpg",
          content:
            "would you stop by to pick up some k.k. slider records?  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lily+(14).jpg",
          content: "walk to Able sisters :)  ig: @lily_acnh_",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini12.png",
          content:
            "Oh to be in Animal Crossing, eating a donut and dozing by a bonfire😌  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini2.png",
          content: "Dozing off by route 66 😴  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini3.png",
          content: "Is this enough cacti? 🌵  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini4.png",
          content:
            "The start of the road on the other side of the island, right between the farm and shopping district!  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(5).jpg",
          content: "Maple's room☕🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(6).jpg",
          content: "A soft and cozy bedroom 🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini5.png",
          content:
            "I have to do everything around here 😪  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini6.png",
          content:
            "Yes there are cactus-in-the-sunset views on both sides of my island and no I'm not sorry 😌  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini7.png",
          content:
            "just a little farm house on a cliffside 🌵  ig: @sage.shenanigans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(1).jpg",
          content:
            "Transition area leading up to resident services 🎄  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(10).jpg",
          content: "Still a wip but here's freckles house 🌼  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(2).jpg",
          content: "One of my favorite areas🤍  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(3).jpg",
          content: "Time for some Mushrooms 🍄  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(4).jpg",
          content: "A tiny soccer field ⚽  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(7).jpg",
          content: "A cute little kitchen and pantry🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(5).jpg",
          content: "Adorable pumpkins for fall 😍  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/liyahcrossing+(10).jpg",
          content: "Marshal's potato farm🥔🤍  ig: @liyah.crossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/lena+(4).jpg",
          content: "lolly's home♡  ig: @lenacrossing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(6).jpg",
          content: "Ice skating rink ❄  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/luna+(8).jpg",
          content: "The peach orchard 🍑🌸  ig: @life.onluna",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          imageUrl:
            "https://islandracnh.s3.us-west-1.amazonaws.com/remini7.png",
          content:
            "just a little farm house on a cliffside 🌵  ig: @sage.shenanigans",
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
