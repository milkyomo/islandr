const express = require("express");
const asyncHandler = require("express-async-handler");

const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

// const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

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
    const image = await db.Image.findByPk(imageId);
    return res.json(image);
  })
);

//

module.exports = router;
