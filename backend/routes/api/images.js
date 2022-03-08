const express = require("express");
const asyncHandler = require("express-async-handler");

const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

// const { User } = require("../../db/models");
const imageValidations = require("../../utils/validateImage");

const db = require("../../db/models");
// const { User, Image, Comment } = db;

const router = express.Router();

//explore
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const images = await db.Image.findAll();
    return res.json(images);
  })
);

//get picture
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await db.Image.findOne({
      where: {
        id: imageId,
      },
      include: {
        model: db.User,
      },
    });

    return res.json(image);
  })
);

//post picture
router.post(
  "/new",
  requireAuth,
  imageValidations.validateCreate,
  asyncHandler(async (req, res) => {
    const image = await db.Image.create(req.body);
    console.log("IMAGE POST", image);
    return res.json(image);
  })
);

//update picture
router.put(
  "/:id",
  requireAuth,
  imageValidations.validateCreate,
  asyncHandler(async function (req, res) {
    const { id, imageUrl, content } = req.body;
    // console.log("REQ.BODY", id);
    // const updatedImage = await db.Image.update(req.body);
    await db.Image.update(
      { imageUrl, content },
      {
        where: {
          id,
        },
        include: {
          model: db.User,
        },
        returning: true,
      }
    );
    const image = await db.Image.findOne({
      where: {
        id,
      },
      include: {
        model: db.User,
      },
    });
    // console.log("IMAGE HERE:::", image);
    // console.log("IMAGE KEYING INTO HERE:::", image[1][0]);
    return res.json(image);
  })
);

module.exports = router;
