const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

// const { User } = require("../../db/models");
// const imageValidations = require("../../utils/validateImage");

const db = require("../../db/models");
// const { User, Image, Comment } = db;

const router = express.Router();

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
// const validateImage = [
//   check("imageUrl")
//     .notEmpty()
//     .isURL({ require_protocol: false, require_host: false })
//     .withMessage("Please provide a valid URL, bestie!"),
//   handleValidationErrors,
// ];
const validateImage = [
  check("imageUrl").custom(async (_value, { req }) => {
    if (!req.file && !req.body.imageUrl) {
      return await Promise.reject("Please upload an image, bestie!.");
    } else if (
      req.file &&
      req.file.mimetype !== "image/jpeg" &&
      req.file.mimetype !== "image/jpg" &&
      req.file.mimetype !== "image/png" &&
      req.file.mimetype !== "image/gif"
    ) {
      return await Promise.reject(
        "Please use these file types: .jpeg, .jpg, .png, .gif"
      );
    } else if (req.file && req.file.size > 1000000) {
      return await Promise.reject("Image must be under 1MB, bestie!");
    }
  }),
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

    return res.json(image);
  })
);

//post picture
router.post(
  "/new",
  requireAuth,
  singleMulterUpload("imageUrl"),
  validateImage,
  asyncHandler(async (req, res) => {
    // const { id, userId, imageUrl, content } = req.body;
    const { id, userId, content } = req.body;
    // const image = await db.Image.create({ id, userId, imageUrl, content });
    const imageUploadUrl = await singlePublicFileUpload(req.file);
    const newImage = await db.Image.create({
      id,
      userId,
      imageUrl: imageUploadUrl,
      content,
    });

    // const image = await db.Image.findByPk(newImage.id);

    return res.json(newImage);
  })
);

//update picture
router.put(
  "/:id",
  requireAuth,
  validateImage,
  asyncHandler(async function (req, res) {
    const { id, imageUrl, content } = req.body;
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
