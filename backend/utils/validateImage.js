const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const id = check("id")
  .notEmpty()
  .withMessage("cannot be empty")
  .isInt({ min: 0 });
const imageUrl = check("imageUrl")
  .notEmpty()
  .withMessage("Please provide a valid URL")
  .isURL({ require_protocol: false, require_host: false });

exports.validateCreate = [imageUrl, handleValidationErrors];

exports.validateUpdate = [id, imageUrl, handleValidationErrors];
