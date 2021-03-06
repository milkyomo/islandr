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

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findOne({
      where: {
        id: commentId,
      },
    });

    return res.json(comment);
  })
);

//create comment
router.post(
  "/new",
  requireAuth,
  validateComment,
  asyncHandler(async (req, res) => {
    const { userId, imageId, comment } = req.body;
    const createdComment = await db.Comment.create({
      userId,
      imageId,
      comment,
    });
    const newCreatedComment = await db.Comment.findOne({
      where: {
        id: createdComment.id,
      },
      include: {
        model: db.User,
      },
    });
    return res.json(newCreatedComment);
  })
);

//delete comment
router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const commentId = parseInt(req.params.id);
    const comment = await db.Comment.findOne({
      where: {
        id: commentId,
      },
    });

    if (!comment) throw new Error("Cannot find comment!");

    await comment.destroy();
    return res.json(commentId);
  })
);
module.exports = router;
