const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");

const db = require("../../db/models");
const router = express.Router();

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const validateComment = [
  check("comment").notEmpty().withMessage("You can't post nothing, silly!"),
  handleValidationErrors,
];

//create comment maybe?
router.post(
  "/new",
  requireAuth,
  validateComment,
  asyncHandler(async (req, res) => {
    console.log("this is req.body", req.body);
    const { id, userId, imageId, comment } = req.body;
    const createdComment = await db.Comment.create({
      id,
      userId,
      imageId,
      comment,
    });
    console.log("this is the created comment", createdComment);
    return res.json(createdComment);
  })
);

module.exports = router;
