const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");

// const { User } = require("../../db/models");
// const imageValidations = require("../../utils/validateImage");

const db = require("../../db/models");
// const { User, Image, Comment } = db;

const router = express.Router();

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const validateImage = [
  check("imageUrl")
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage("Please provide a valid URL, bestie!"),
  handleValidationErrors,
];

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
      include: [
        {
          model: db.User,
          attributes: ["username"],
        },
        {
          model: db.Comment,
          include: [
            {
              model: db.User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    // console.log("IMAGE GET", image.Comments);
    return res.json(image);
  })
);

//post picture
router.post(
  "/new",
  requireAuth,
  validateImage,
  asyncHandler(async (req, res) => {
    // console.log("this is req.body", req.body);
    const { id, userId, imageUrl, content } = req.body;
    const image = await db.Image.create({ id, userId, imageUrl, content });
    // console.log("IMAGE POST", image);
    return res.json(image);
  })
);

//update picture
router.put(
  "/:id",
  // requireAuth,
  validateImage,
  asyncHandler(async function (req, res) {
    console.log("this is backend req:", req.body);
    const { id, imageUrl, content } = req.body;
    // console.log("REQ.BODY", id);
    // const updatedImage = await db.Image.update(req.body);
    await db.Image.update(
      { imageUrl, content },
      {
        where: {
          id,
        },
        // include: {
        //   model: db.User,
        //   attributes: ["username"],
        // },
        returning: true,
      }
    );
    const image = await db.Image.findOne({
      where: {
        id,
      },
      include: [
        {
          model: db.User,
          attributes: ["username"],
        },
        {
          model: db.Comment,
          include: [
            {
              model: db.User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });
    // console.log("IMAGE HERE:::", image);
    // console.log("IMAGE KEYING INTO HERE:::", image[1][0]);
    return res.json(image);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const imageId = parseInt(req.params.id, 10);
    const image = await db.Image.findOne({
      where: {
        id: imageId,
      },
    });
    if (!image) throw new Error("Cannot find image!");

    await image.destroy();
    return res.json(image.id);
  })
);

module.exports = router;
