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
    res.json(image);
  })
);

module.exports = router;
